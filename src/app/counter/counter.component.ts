import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{ counter }}</h3>
    <input type="button" value="-1" (click)="decrementar()">
    <input type="button" value="Reset" (click)="reset()">
    <input type="button" value="+1" (click)="incrementar()">
  `,
  styles: ``
})
export class CounterComponent {
  private _title: string = 'Bases';
  private _counter: number = 10; 
    
  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }
  
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }
  
  incrementar ():void {
    this.counter++;
  }

  decrementar ():void {
    this.counter--;
  }

  reset ():void {
    this.counter = 10;
  }
}
