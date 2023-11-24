import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recup-param',
  templateUrl: './recup-param.component.html',
  styleUrls: ['./recup-param.component.scss']
})
export class RecupParamComponent implements OnInit {

  param!: number;

  constructor(
    private readonly _ar: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {

    console.log(this._ar);
    // this.param = +this._ar.snapshot.params['param'];
    this._ar.params.subscribe(
      (p: any) => this.param = +p.param
    );
  }

  next() {

    this._router.navigate(['demo/demo08/', (this.param + 1)]);
  }

}
