import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensajes: string[];

  constructor() {
    this.mensajes = [];
  }

  onavisa30segundos($event) {
    this.mensajes.push(`Al reloj con el nombre ${$event} le quedan 30 segundos`);
  }

  onavisatermina($event) {
    this.mensajes.push(`El reloj con el nombre ${$event} ha acabado`);

  }
}
