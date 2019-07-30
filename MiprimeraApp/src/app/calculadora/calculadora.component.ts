import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: string;
  numero: string;
  pantalla: string;

  constructor() {
    this.resultado = "";

  }

  ngOnInit() {
  }

  escribirNumero(pNumero) {
    this.resultado += pNumero;
  }

  resultadoFinal() {

    this.resultado = eval(this.resultado);
  }

  borrar() {
    this.resultado = "";
  }

}
