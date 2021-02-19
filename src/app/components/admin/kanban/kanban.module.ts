import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from '../kanban/kanban.component';
import { TaskComponent } from './task/task.component';
import { MaterialModule } from 'src/app/material.module';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [KanbanComponent, TaskComponent, TaskDialogComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [TaskDialogComponent],
  
})
export class KanbanModule { }
