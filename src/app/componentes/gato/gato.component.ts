import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajesComponent } from '../mensajes/mensajes.component';
@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {
  constructor(public mensaje: MatDialog) {}    
  openDialog(f: number, m: string) {
    const dialogRef = this.mensaje.open(MensajesComponent,{width: '400px',height: '150px',
    disableClose: true,data:{texto:m,sino:f}});
  }  
  @Input() vson:number=0;
  @Input() vjug:number=0;
  @Input() inicio:number=0;
  
  limpiando:string[]=["","","","","","","","",""];
  spiner:boolean=true
  tf:boolean=false;
  contador:number=0;
  continuar:number=0;
  ap:boolean=false;
  ap1:number[]=[];
  ap2:number=0;
  contenido1(r: Event){    
    if ((r.target as HTMLInputElement).value==""){
       this.contenido(parseInt((r.target as HTMLInputElement).id));               
    }  
  }

  contenido(g: number){                       
    if(g==11){
      if(this.vson==1){                
        this.maquina();
      }      
    }else{
      if (g<=9){
        if(this.vson==1){           
          if(this.vjug==0){                                                               
            this.limpiando[g]="O";            
            this.vjug=1;
            this.contador++
            this.revisajugada("O");            
            if (this.continuar==0){
              this.openDialog(1,"Espere...");
              this.maquina();                         
            }
            
          }else{
            this.openDialog(1,"Espere...");
            this.maquina();                      
          }          
        }else{
          this.limpiando=["","","","","","","","",""];            
        }
      }      
    }    
  }
  revisajugada(s: string){     
    if(this.limpiando[0]==s && this.limpiando[1]==s && this.limpiando[2]==s
    || this.limpiando[3]==s && this.limpiando[4]==s && this.limpiando[5]==s
    || this.limpiando[6]==s && this.limpiando[7]==s && this.limpiando[8]==s
    || this.limpiando[0]==s && this.limpiando[3]==s && this.limpiando[6]==s
    || this.limpiando[1]==s && this.limpiando[4]==s && this.limpiando[7]==s
    || this.limpiando[2]==s && this.limpiando[5]==s && this.limpiando[8]==s
    || this.limpiando[0]==s && this.limpiando[4]==s && this.limpiando[8]==s
    || this.limpiando[2]==s && this.limpiando[4]==s && this.limpiando[6]==s){
      if (s=="O"){
        if(this.limpiando[0]==s && this.limpiando[1]==s && this.limpiando[2]==s){
          this.ap1[0]=0;
          this.ap1[1]=1;
          this.ap1[2]=2;
          this.ap=true;
        }
        this.openDialog(2,"Felicidades Ganaste");
        this.continuar=1;
        this.reiniciar();                          
      }
      if (s=="X"){ 
        if (this.mensaje){
          this.mensaje.closeAll();
          this.openDialog(2,"Perdiste");
        }               
        this.continuar=1;
        this.reiniciar();                          
      }
    }                           
  }  
  reiniciar(){
    setTimeout(()=>{      
      this.vjug=0;         
      this.contador=0;
      this.continuar=0;      
    },1000);
    
  }
  maquina(){
    if (this.ap){
      if(this.ap1.length>=1){        
        this.ap2=this.ap1.length-1
        for(let info of this.ap1){          
          this.vjug=Math.ceil(Math.random() * (this.ap2 - 0) + 0);
          console.log(this.vjug);
          if(this.limpiando[this.vjug]==""){
            this.limpiando[this.vjug]="X";         
            this.contador++                 
            this.vjug=0; 
            this.ap=false;       
            this.cierra()               
            break;                      
          }
        }
      }  
    }else{
      for(let info of this.limpiando){
        this.vjug=Math.ceil(Math.random() * (8 - 0) + 0);          
        if(this.limpiando[this.vjug]==""){
          this.limpiando[this.vjug]="X";         
          this.contador++                 
          this.vjug=0;        
          this.cierra()               
          break;                      
        }
      }
    }
        
  }

  cierra(){
    setTimeout(()=>{      
      this.mensaje.closeAll();      
      this.revisajugada("X");
    },500);
  }
  limpiar(){
    this.limpiando=["","","","","","","","",""];                        
  }

  ver(){
    setTimeout(()=>{      
      this.contenido(this.inicio);            
    },500);    
  }

  aprende(){
  
  }

}






  
  
