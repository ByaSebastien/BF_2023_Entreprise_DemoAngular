import { ResolveFn } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

export const movieResolver: ResolveFn<Observable<Movie[]>> = (route, state) => {
  const movieService: MovieService = inject(MovieService);

  return movieService.getAll();
};
