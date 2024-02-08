import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName:string[] = ["Antonio Recio", "Amador Rivas", "Enrique Pastor", "Coque Calatrava", "Maite Figueroa"];
  public pulsado:boolean = false;
  public heroeBorrado:string = '';

  borrarUltimo():void {
    if (this.heroName.length > 0) {
      this.heroeBorrado = String(this.heroName.pop());
      this.pulsado = true;
    } else {
      this.heroeBorrado = 'No hay';
    }
    
  }
}
