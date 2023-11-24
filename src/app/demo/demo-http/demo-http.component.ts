import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { FakeAuthServiceService } from '../demo-service/service/fake-auth-service.service';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.scss']
})
export class DemoHttpComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  movies!: Movie[];
  isconnected!: boolean;

  constructor(
    private readonly _ar: ActivatedRoute,
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _fakeAuthService: FakeAuthServiceService
  ) { }

  ngOnInit(): void {
    this._fakeAuthService.isConnected$
      .subscribe((data) => this.isconnected = data);

    this._ar.data.subscribe(
      (datas: any) => {
        this.movies = datas.mr
        console.log(this.movies);
        console.log(datas);
      }
    );

    // this._ar.snapshot.data['mr']
    //   .subscribe((data) => this.movies = data);
    // .subscribe({
    //   next: (data) => {
    //     this.movies = data;
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log("complete");
    //   }
    // });
  }

  redirectToCreate() {

    this._router.navigate(['/demo/demo09/create']);
  }

  delete(id: number) {

    this._movieService.delete(id)
      .subscribe({
        next: () => {
          this.movies$ = this._movieService.getAll();
          this._movieService.getAll()
            .subscribe((data) => this.movies = data);
        }
      });
  }
}
