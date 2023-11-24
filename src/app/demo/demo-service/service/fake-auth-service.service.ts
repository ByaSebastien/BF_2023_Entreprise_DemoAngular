import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthServiceService {

  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYkB0ZXN0LmJlIiwiaWF0IjoxNzAwODMxMzYyLCJleHAiOjE3MDA4MzQ5NjIsInN1YiI6IjEifQ.pcEs3xoojqw4flxoqO6g5WKjsYUIPZjm-PlHNBBf6YA";

  constructor() {
    if (localStorage.getItem('isConnected')) {
      this._isConnected$.next(true);
    }
  }

  private _isConnected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isConnected$(): Observable<boolean> {
    return this._isConnected$.asObservable();
  }

  get isconnected(): boolean {
    return this._isConnected$.value;
  }

  connect() {
    this._isConnected$.next(true);
    localStorage.setItem('isConnected', true + '');
    localStorage.setItem('token', this.token);
  }

  disconnect() {
    this._isConnected$.next(false);
    localStorage.removeItem('isConnected');
    localStorage.removeItem('token');
  }
}
