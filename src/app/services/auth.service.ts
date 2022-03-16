import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {
    if( localStorage.getItem('token')!=null){
      this.saveCurrentUser()
    }
  }

  registerForm(formData: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      formData
    );
  }

  loginForm(formData: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      formData
    );
  }

  currentUser=new BehaviorSubject(null)
  saveCurrentUser() {
    let token: any = localStorage.getItem('token');
    let data:any = jwt_decode(token);
    this.currentUser.next(data)
  }
}
