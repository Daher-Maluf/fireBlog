import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags/tags.component';
import { TagsDetailComponent } from './tags-detail/tags-detail.component';
import { HomeComponent } from '../home/home.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [TagsComponent, TagsDetailComponent,],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MaterialModule,
    HomeModule
  ]
})
export class TagsModule { }
