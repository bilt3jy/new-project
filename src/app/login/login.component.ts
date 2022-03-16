import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9@&]{8,}$'),
    ]),
  });

  loginSubmit(loginInfo: FormGroup) {
    return this._AuthService
      .loginForm(loginInfo.value)
      .subscribe((response) => {
       if(response.message=='success'){
         this._Router.navigate(['/home'])
         localStorage.setItem('token',response.token)
         this._AuthService.saveCurrentUser()
       }else{
         this.errors=response.message
       }
      });
  }

  ngOnInit(): void {}
}
