import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuscarComponent } from '../buscar/buscar.component';
import { MaterialModule } from '../../../material.module';
import { BuscarRoutingModule } from './buscar-routing.module';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';



@NgModule({
  declarations: [
    BuscarComponent,
    SpinnerComponent
    
    
  ],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    MaterialModule,
    

  ],
  exports: [
   BuscarComponent
  ]
})
export class BuscarModule { }
