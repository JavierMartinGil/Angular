import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';
  numeros: Array<number>;

  constructor() {
    this.numeros = [10, 12, 3, 7];
  }

  manejarCuenta($event) {
    console.log($event);
  }
}
