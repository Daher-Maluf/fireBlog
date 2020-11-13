import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsDetailComponent } from './tags-detail/tags-detail.component';
import { TagsComponent } from './tags/tags.component';



const routes: Routes = [
{path: '', component: TagsComponent},
{path:'tags-detail/:category', component: TagsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
