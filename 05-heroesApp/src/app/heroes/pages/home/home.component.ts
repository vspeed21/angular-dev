import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px
    }
    .flex-buttons{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  `]
})
export class HomeComponent {

  constructor(private router: Router,
              private authService: AuthService) {}

  get user() {
    return this.authService.user;
  }

  logout() {
    this.router.navigateByUrl('/auth', {replaceUrl: true});
  }
}
