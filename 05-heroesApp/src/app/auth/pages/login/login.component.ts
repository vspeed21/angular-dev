import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router,
              private authService: AuthService) {}

  login() {
    this.authService.login()
      .subscribe(user => {
        if(user.id) {
          console.log(user);
          this.router.navigateByUrl('/heroes/listado')
        }
      })
  }
}
