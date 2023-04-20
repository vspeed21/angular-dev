import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { enviroment } from '../../../enviroments/enviroment';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = enviroment.apiUrl;
  private _user: User | undefined;

  constructor(private http: HttpClient) { }

  get user(): User {
    return {...this._user!}
  }

  verificaAuth():Observable<boolean> {
    if(!localStorage.getItem('id')) return of(false);

    return this.http.get<User>(`${this.apiUrl}/usuarios/1`)
                .pipe(
                  map(auth => {
                    this._user = auth;
                    return true
                  })
                )
  }

  login() {
    return this.http.get<User>(`${this.apiUrl}/usuarios/1`)
                    .pipe(
                      tap(user => this._user = user),
                      tap(user => localStorage.setItem('id', user.id))
                    );
  }

}
