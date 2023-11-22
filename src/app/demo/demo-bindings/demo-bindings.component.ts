import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrls: ['./demo-bindings.component.scss']
})
export class DemoBindingsComponent {

  myString: string = 'World';
  name: string = '';
  isClickable: boolean = true;


  sayHello(): void {
    // alert("Hello " + this.name + "!");
    alert(`Hello ${this.name}!`);
  }

  toggleIsClickable(): void {
    this.isClickable = !this.isClickable;
  }

  resetName(): void {
    this.name = '';
  }
}
