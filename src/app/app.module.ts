import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { InformacionModule } from './informacion/informacion.module';
import { NavegacionModule } from './navegacion/navegacion.module';
import { SalidasModule } from './salidas/salidas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InformacionModule,
    EditorModule,
    NavegacionModule,
    SalidasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
