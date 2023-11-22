import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent {

  myString: string = "Hello world";
  myNumber: number = 42;
  myDate: Date = new Date(1991, 2, 21);
}
