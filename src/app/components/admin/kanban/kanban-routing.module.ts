import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanbanComponent } from './kanban.component';


const routes: Routes = [
 { path: '', component: KanbanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
