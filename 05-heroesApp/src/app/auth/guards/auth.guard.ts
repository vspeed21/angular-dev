import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  //Verifica si se puede activar un modulo  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.authService.verificaAuth()
                 .pipe(
                  tap(isAuth => {
                    if(!isAuth) {
                      this.router.navigateByUrl('/auth/login');
                    }
                  })
                 );
  }

  //Verifica si se puede cardar un modulo
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verificaAuth().pipe(
        tap(isAuth => {
          if(!isAuth) {
            this.router.navigateByUrl('/auth/login');
          }
        })
       );
  }
}
