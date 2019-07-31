import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'verde';
  }

  ngOnInit() {

    setInterval(() => { this.cambiarSemaforo() }, 1000) // para que sea automatico
  }

  cambiarSemaforo() {
    if (this.colorSeleccionado == 'verde') {
      this.colorSeleccionado = 'ambar';
    } else if (this.colorSeleccionado == 'ambar') {
      this.colorSeleccionado = 'rojo';
    } else {
      this.colorSeleccionado = 'verde';
    }

  }

}
