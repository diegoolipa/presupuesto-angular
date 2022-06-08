import { Component, OnInit } from '@angular/core';
import * as events from "events";
import {IngresoServicio} from "../ingreso/ingreso.servicio";
import {EgresoServicio} from "../egreso/egreso.servicio";
import {Ingreso} from "../ingreso/ingreso.model";
import {Egreso} from "../egreso/egreso.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcionInput:string;
  valorInput:number;
  tipo:string='ingresoOperacion';
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo=evento.target.value;
  }

  agregarValor(){
    console.log(this.descripcionInput, this.valorInput)
    if (this.tipo==='ingresoOperacion'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
