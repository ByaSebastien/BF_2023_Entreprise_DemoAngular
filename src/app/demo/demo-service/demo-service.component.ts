import { Component, OnInit } from '@angular/core';
import { FakeAuthServiceService } from './service/fake-auth-service.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss']
})
export class DemoServiceComponent implements OnInit {

  isConnected!: boolean;

  constructor(
    private readonly _fakeAuthService: FakeAuthServiceService
  ) { }

  ngOnInit(): void {
    this._fakeAuthService.isConnected$.subscribe(
      (value) => {
        this.isConnected = value
        console.log("i'm in");
      }
    );
  }

  login() {
    this._fakeAuthService.connect();
  }

  logout() {
    this._fakeAuthService.disconnect();
  }
}
