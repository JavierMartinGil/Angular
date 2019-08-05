import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrProdsComida: Producto[];
  arrProdsBebida: Producto[];
  arrProductoSeleccionado: Producto[];


  constructor() {
    this.arrProdsComida = [
      new Producto('Cocido', 'https://iconotc.com/wp-content/uploads/2018/05/Curso-Angular.png', 5.6),
      new Producto('Huevos', 'https://5.imimg.com/data5/PX/AE/MY-49169462/angular-js-training-500x500.jpg', 7.2),
      new Producto('Sopa', 'https://pbs.twimg.com/profile_images/1100036403692482562/PpNoaSrj_400x400.png', 4.3),
      new Producto('Paella', 'https://angularconferences.com/assets/img/confs/nghighcountry.svg', 8.1),
    ]

    this.arrProdsBebida = [
      new Producto('Fanta', 'https://i0.wp.com/angularfirst.com/wp-content/uploads/2015/03/angular-1-or-2.jpg', 2.6),
      new Producto('Cafe', 'https://pbs.twimg.com/profile_images/1073947045029969921/rpord4qt_400x400.jpg', 1.5),
      new Producto('Agua', 'https://pbs.twimg.com/profile_images/1073947045029969921/rpord4qt_400x400.jpg', 1.2),
      new Producto('Vino', 'https://iconotc.com/wp-content/uploads/2018/05/Curso-Angular.png', 3.2),
    ]

    this.arrProductoSeleccionado = [];

  }

  onProductoSeleccionado(pNuevoProducto) {
    this.arrProductoSeleccionado.push(pNuevoProducto);
    console.log(this.arrProductoSeleccionado);
  }
}
