import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{  
  rcjp:number=0;  //para el contador
  rjsn:number=0;  //iniciar o finalizar
  rjug:number=0;  //jugador
  inicio:number=0; //para abrir o no el mensaje
  
  metodopadre(rv: number[]){     
    this.rjsn=rv[0]; //este me dice si inicia o no el juego
    this.rcjp=rv[1]; //este me dice el numero de juegos
    this.rjug=rv[2];  //este me dice el jugador
    this.inicio=rv[3]; //este me dice el jugador    
  }
}
