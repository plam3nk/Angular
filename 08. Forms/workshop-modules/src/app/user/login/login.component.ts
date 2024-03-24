import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isFormInvalid = false;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    console.log(form.value);
    this.userService.login();
    this.router.navigate(['home']);

    if (form.invalid) {
      return;
    }

    this.userService.login();
    this.router.navigate(['home']);
  }
}
