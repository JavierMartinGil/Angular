import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estilosParrafo: any;

  constructor() {

    this.estilosParrafo = {
      backgroundColor: 'red',
      fontSize: '14px'
    }
  }

  cambiarColor() {
    this.estilosParrafo.backgroundColor = 'green';
  }
}
