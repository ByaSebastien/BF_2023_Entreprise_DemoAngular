import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  currentStyle: any;

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;
  isActive: boolean = false;

  ngOnInit(): void {
    this.setCurrentStyle();
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '12px'
    }
  }

  toggleItalic() {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  toggleBold() {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  toggleSize() {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  toggleIsActive() {
    this.isActive = !this.isActive;
  }
}
