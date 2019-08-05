import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() titulo: string;

  constructor() {
    this.titulo = "";
    this.productos = [];
  }

  ngOnInit() {
  }

  sumarPrecio() {

    let total = 0;
    for (let prod of this.productos) {
      total += prod.precio;
    }
    return total;
  }

}
