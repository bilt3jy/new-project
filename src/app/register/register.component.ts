import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errors:string=''
  
  constructor(private _authService: AuthService , private _Router:Router) {}
  registerSubmit(registerInfo: FormGroup) {
    this._authService.registerForm(registerInfo.value).subscribe((response)=>{
      if(response.message=='success'){
       this._Router.navigate(['/login'])
      }else{
        this.errors=response.errors.email.message 
      }
    });
  }

  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9@&]{8,}$'),
    ]),
  });

  ngOnInit(): void {}
}
