import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() presupuestoTotal:number;
  @Input() ingresoToral:number;
  @Input() egresoTotal:number;
  @Input() procentajeTotal:number;
  constructor() { }

  ngOnInit(): void {
  }

}
