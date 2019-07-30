import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  @Input() inicio: string;
  contador: number;

  constructor() {
    this.contador = 10;
  }

  ngOnInit() {
    this.contador = parseInt(this.inicio);
  }

  arrancarContador() {
    let interval = setInterval(() => {

      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);

      }
    }, 1000);
  }

  reset() {
    this.contador = parseInt(this.inicio);
  }

}
