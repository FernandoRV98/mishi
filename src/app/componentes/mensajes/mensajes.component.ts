import { Component, Inject } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent{
  texto1:string="Espere...";
  sino1:number=0;  
  constructor(
    public dialogRef:MatDialogRef<MensajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{sino: number,texto: string})
    {
      this.texto1=data.texto;
      this.sino1=data.sino;            
    }
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 0;  

    cerrar(): void {
      this.dialogRef.close();
    }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  /*constructor(

    public dialogRef:MatDialogRef<MensajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{texto: string,sino: boolean}){
      this.texto1=data.texto
      this.sino1=data.sino
    }*/
    

    

