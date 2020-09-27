import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [
    AboutComponent
  ],

  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule
    ]
})
export class AboutModule {}
