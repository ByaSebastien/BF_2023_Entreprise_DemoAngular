import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { MovieFormGroup } from '../forms/movieFormGroup';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  movieForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _movieService: MovieService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {

    this.movieForm = this._fb.group(
      MovieFormGroup
    );

    console.log(this.movieForm);
  }

  onSubmit() {

    if (!this.movieForm.valid) {
      return;
    }
    this._movieService.create(this.movieForm.value)
      .subscribe({
        next: () => {

          this._router.navigate(['/demo/demo09']);
        }
      });
  }
}
