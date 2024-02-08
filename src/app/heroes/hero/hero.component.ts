import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "ironman";
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get nombreMayus():string{
    return this._nombre.toUpperCase();
  }

  private _edad: number = 45;
  public get edad(): number {
    return this._edad;
  }
  public set edad(value: number) {
    this._edad = value;
  }

  descrip():string {
    return this._nombre + ' - ' + this._edad
  }

  cambiarNombre():void {
    let nuevo:string|null = prompt("Introduce un nuevo nombre:");
    this._nombre = nuevo + "";
  }

  cambiarEdad():void {
    let nuevo:number|null = Number(prompt("Dime la edad"));
    this._edad = nuevo;
  }

  reset():void {
    this._nombre = "ironman";
    this._edad = 45;
  }
}
