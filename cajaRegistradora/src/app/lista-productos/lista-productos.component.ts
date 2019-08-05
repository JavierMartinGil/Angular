import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];
  @Output() productoSeleccionado = new EventEmitter<Producto>();


  constructor() {

    this.productoSeleccionado = new EventEmitter();

  }

  ngOnInit() {
  }

  enviarProducto(producto) {

    this.productoSeleccionado.emit(producto);

  }
}
