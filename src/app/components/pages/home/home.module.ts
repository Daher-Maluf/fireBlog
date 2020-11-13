import { PostComponent } from './../../posts/post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';
import { HeroHeaderComponent } from '../../../shared/components/hero-header/hero-header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [HomeComponent, PostComponent, HeroHeaderComponent, SpinnerComponent],
  imports: [
    CommonModule,
     HomeRoutingModule,
      MaterialModule,
       FlexLayoutModule,
        ScrollingModule,
         QuillModule.forRoot({modules: {
          syntax: true,
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
          ]
        }})],
  exports: [PostComponent,SpinnerComponent]
})
export class HomeModule { }
