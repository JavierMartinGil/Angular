import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/preguntas.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  arrPreguntas: Pregunta[];
  numeroPregunta: number;
  intervalo: any;
  cronometro: number;
  intervaloCrono: any;


  constructor() {
    this.arrPreguntas = [
      new Pregunta('¿Cuanto es 2x2?', ['2', '4', '6', '8'], 1),
      new Pregunta('¿Cuanto es 2x3?', ['12', '4', '6', '8'], 2),
      new Pregunta('¿Cuanto es 2x4?', ['2', '14', '6', '8'], 3),
    ];

    this.numeroPregunta = 0;
    this.intervalo = [];
    this.cronometro = 30;
    this.intervaloCrono = [];

    this.intervalo = setInterval(() => {
      this.numeroPregunta++;
      if (this.numeroPregunta == 2) {
        this.numeroPregunta = 0;
      }

    }, 30000);

    this.intervaloCrono = setInterval(() => {
      this.cronometro--;
      if (this.cronometro == 0) {
        this.cronometro = 30;
      }

    }, 1000);


  }

  ngOnInit() {
  }


}
