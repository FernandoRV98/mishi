import { Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MensajesComponent } from '../mensajes/mensajes.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public mensaje: MatDialog) {}
  
  oie:string[]=["Humano: O","Maquina: X","Aleatorio","Jugar","Reintentar","Idioma","Terminar"];
  @Output() va= new EventEmitter<number[]>();//es un array que envia dos cosas el 0 y contador de juegos
  vei:number[]=[0,0,0]; //es el array que junta el 0 y el contador de juegos
  cm:number=0;//es el contador de juegos
  inifin:number=0;
  cnb:number=3;
  jug:number=0;
  svf:boolean=false;
  g:boolean=false;
  inicio:number=0;  
  openDialog() {
    const dialogRef = this.mensaje.open(MensajesComponent,{width: '400px',height: '150px',
    disableClose: true,data:{sino:0,texto:'Comieza el juego'}});
  }
  enviar(){         
    this.g=true;    
    if(this.inifin==0){       
      this.openDialog();
      this.inifin=1;
      this.cnb=6;
      this.svf=true;
      this.cm++;//aumenta cada vez que se llama al metodo            
    }else{
      this.inifin=0;
      this.cnb=3;
      this.svf=false;           
    }              
    if(this.jug==1){                
      this.inicio=11;
    }else{
      this.inicio=12;
    }
    
    this.vei=[this.inifin,this.cm,this.jug,this.inicio]//reune el cero y el contador de juegos
    this.va.emit(this.vei); //emite el array armado vei    
    this.cierra(); 
  }
  cierra(){
    setTimeout(()=>{
      this.mensaje.closeAll();    
      this.g=false;
    },1500);

  }

  turno(e: Event){    
    this.jug=(parseInt((e.target as HTMLInputElement).value));        
  }
  
  
  



  
  
  
    
  
  /*turno(x: Event){    
    this.jugador=(parseInt((x.target as HTMLInputElement).value));    
  }*/
}

/*
this.contadormenu.emit(this.contador++)
console.log(parseInt((event.target as HTMLInputElement).value));
@Output() contadormenu = new EventEmitter<number>();
  contador:number=0; */