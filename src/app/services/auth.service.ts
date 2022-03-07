import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {}

  registerForm(formData: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData);
  }

  loginForm(formData:any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData);
  }
}
