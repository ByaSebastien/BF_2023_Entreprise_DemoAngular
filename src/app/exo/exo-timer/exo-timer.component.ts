import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-timer',
  templateUrl: './exo-timer.component.html',
  styleUrls: ['./exo-timer.component.scss']
})
export class ExoTimerComponent {

  seconds: number = 0;
  timer: any;
  isActive: boolean = false;

  start(): void {
    if (this.isActive) {
      return;
    }
    this.timer = setInterval(() => {
      this.seconds += 1;
    }, 100);
    this.isActive = true;
  }

  stop(): void {

    clearInterval(this.timer);
    this.isActive = false;
  }

  reset(): void {

    this.seconds = 0;
  }
}
