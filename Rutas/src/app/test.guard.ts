import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {

  constructor(private router: Router) {

  }


  canActivate() {
    let numeroALeatorio = Math.random() * 100;

    console.log('Pasa por el GUARD');
    console.log(numeroALeatorio)
    if (numeroALeatorio >= 50) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;

    }

  }

}
