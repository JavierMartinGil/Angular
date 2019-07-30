import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronoComponent } from './crono/crono.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
