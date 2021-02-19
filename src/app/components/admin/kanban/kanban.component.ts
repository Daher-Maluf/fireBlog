import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from './task/task';
import {MatDialog} from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject([]);
  collection.valueChanges({idField: 'id'}).subscribe((val: Task[]) => {
     subject.next(val);
  });
  return subject;
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  todo = getObservable(this.fs.collection('todo'));
  inProgress = getObservable(this.fs.collection('inProgress'));
  done = getObservable(this.fs.collection('done'));

  constructor(private dialog: MatDialog, private fs: AngularFirestore) { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Task[]>): void{
    if(event.previousContainer === event.container){
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    this.fs.firestore.runTransaction(() =>{
      return Promise.all([
        this.fs.collection(event.previousContainer.id).doc(item.id).delete(),
        this.fs.collection(event.container.id).add(item)
      ]);
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
     if(result.delete){
       this.fs.collection(list).doc(task.id).delete();
     } else {
       this.fs.collection(list).doc(task.id).update(task);
     }
    });
  }


  newTask(): void{
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '240px',

      data: {
         task: {}
      }
    });
    dialogRef
           .afterClosed()
           .subscribe((result: TaskDialogResult) => this.fs.collection('todo').add(result.task));


  }
}
