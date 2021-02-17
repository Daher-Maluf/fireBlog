import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  todo: Task[] = [
   {title: 'Buy Milk', description: 'got to the store'},
   {title: ' create a kanban board', description:'dfaksdkfaksdfk' }
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Task[]>): void{
    if(event.previousContainer === event.container){
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  edit(list: string, task: Task): void {
    
  }
}
