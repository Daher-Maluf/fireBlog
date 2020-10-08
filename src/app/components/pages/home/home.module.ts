import { PostComponent } from './../../posts/post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';
import { HeroHeaderComponent } from '../../../shared/components/hero-header/hero-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, PostComponent, HeroHeaderComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, FlexLayoutModule],
  exports: [PostComponent]
})
export class HomeModule { }
