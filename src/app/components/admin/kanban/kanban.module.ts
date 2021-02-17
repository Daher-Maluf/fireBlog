import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from '../kanban/kanban.component';
import { TaskComponent } from './task/task.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [KanbanComponent, TaskComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    MaterialModule
  ]
})
export class KanbanModule { }
