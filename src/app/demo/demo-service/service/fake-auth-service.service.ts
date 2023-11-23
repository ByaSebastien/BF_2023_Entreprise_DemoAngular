import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthServiceService {

  constructor() { }

  private _isConnected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isConnected$(): Observable<boolean> {
    return this._isConnected$.asObservable();
  }

  get isconnected(): boolean {
    return this._isConnected$.value;
  }

  connect() {
    this._isConnected$.next(true);
  }

  disconnect() {
    this._isConnected$.next(false);
  }
}
