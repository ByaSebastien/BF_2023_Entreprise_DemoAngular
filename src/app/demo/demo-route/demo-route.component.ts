import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-route',
  templateUrl: './demo-route.component.html',
  styleUrls: ['./demo-route.component.scss']
})
export class DemoRouteComponent implements OnInit {

  parameter!: number;

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.parameter = 42;
  }

  redirect() {

    this._router.navigate(['demo/demo08/', this.parameter])
  }
}
