import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { MenuComponent } from './componentes/menu/menu.component';
import { GatoComponent } from './componentes/gato/gato.component';
import { PuntuacionComponent } from './componentes/puntuacion/puntuacion.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GatoComponent,
    PuntuacionComponent,
    MensajesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
