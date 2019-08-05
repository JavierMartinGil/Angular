import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() segundos: string;
  @Input() identificador: string;
  // declaro los output de mi componente
  @Output() avisa30segundos: EventEmitter<any>;
  @Output() avisatermina: EventEmitter<any>;

  contador: number;

  constructor() {
    // inicializo los output de mi componente
    this.avisa30segundos = new EventEmitter();
    this.avisatermina = new EventEmitter();
    this.segundos = "";
    this.identificador = "";
    this.contador = 0;
  }

  ngOnInit() {
    this.contador = parseInt(this.segundos);
    let intervalo = setInterval(() => {
      this.contador--;
      if (this.contador == 30) {
        this.avisa30segundos.emit(this.identificador);
      }
      if (this.contador == 0) {
        this.avisatermina.emit(this.identificador);
        clearInterval(intervalo);
      }

    }, 1000);

  }

  mostrarTiempo() {
    let horas = Math.floor(this.contador / (60 * 60));
    let segundosRestantes = this.contador % (60 * 60);
    let minutos = Math.floor(segundosRestantes / 60);
    let segundos = segundosRestantes % 60;
    return this.mostrarTiempoOK(horas, minutos, segundos);
  }

  mostrarTiempoOK(pHoras: number, pMinutos: number, pSegundos: number) {
    let horasString = (pHoras < 10) ? `0${pHoras}` : `${pHoras}`;
    let minutosString = (pMinutos < 10) ? `0${pMinutos}` : `${pMinutos}`;
    let segundosString = (pSegundos < 10) ? `0${pSegundos}` : `${pSegundos}`;
    return `${horasString}:${minutosString}.${segundosString}`;
  }
}



