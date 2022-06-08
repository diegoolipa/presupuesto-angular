import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import {IngresoServicio} from "./ingreso/ingreso.servicio";
import {EgresoServicio} from "./egreso/egreso.servicio";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    EgresoComponent,
    CabeceraComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
