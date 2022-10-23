import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import { LaminadoComponent } from './laminado/laminado.component';
import { FibrosoComponent } from './fibroso/fibroso.component';



@NgModule({
  declarations: [
    MaterialComponent,
    LaminadoComponent,
    FibrosoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialComponent,
    LaminadoComponent,
    FibrosoComponent
  ]
})
export class EditorModule { }
