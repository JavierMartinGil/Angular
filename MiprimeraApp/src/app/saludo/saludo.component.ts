import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  mensaje: string;
  contador: number;
  identificador: string;

  constructor() {
    this.mensaje = 'Este es mi mensaje de saludo';
    this.contador = 0;
    this.identificador = "parrafofinal";

    setInterval(() => {
      this.contador++

    }, 1000);
  }
  mostrarMensaje() {
    return 'Mensaje desde metodo';
  }
}
