import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieForm } from '../models/movie.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getAll(): Observable<Movie[]> {

    return this._http.get<Movie[]>(environment.apiUrl + 'movie');
  }

  create(form: MovieForm): Observable<Movie> {

    return this._http.post<Movie>(environment.apiUrl + '660/movie', form);
  }

  delete(id: number) {
    return this._http.delete(environment.apiUrl + '660/movie/' + id);
  }
}
