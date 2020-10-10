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

@NgModule({
  declarations: [HomeComponent, PostComponent, HeroHeaderComponent, SpinnerComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, FlexLayoutModule, ScrollingModule],
  exports: [PostComponent]
})
export class HomeModule { }
