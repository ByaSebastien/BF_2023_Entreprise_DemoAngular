import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //S'execute avant tout
  constructor() {
    console.log("In constructor");
  }

  //S'execute après le constructor mais avant le chargement du component
  ngOnInit(): void {
    console.log("On init");
  }

  ngOnDestroy(): void {
    console.log("On destroy");
  }
}
