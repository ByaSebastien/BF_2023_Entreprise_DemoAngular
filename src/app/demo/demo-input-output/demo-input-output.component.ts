import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrls: ['./demo-input-output.component.scss']
})
export class DemoInputOutputComponent {

  name: string = '';
  infoEnfant: string | undefined;

  onEvent(info: string) {
    this.infoEnfant = info;
  }
}
