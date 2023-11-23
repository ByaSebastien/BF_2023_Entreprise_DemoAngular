import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {

  @Input() nameParent!: string;
  @Output() sendEvent!: EventEmitter<string>

  constructor() {
    this.sendEvent = new EventEmitter<string>();
  }

  raiseEvent() {
    this.sendEvent.next("info venant de l'enfant");
  }
}
