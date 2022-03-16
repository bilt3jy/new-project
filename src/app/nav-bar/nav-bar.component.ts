import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLogin: boolean = false;
  dataInfo: any = {};

logout(){
  this._AuthService.currentUser.next(null)
this._router.navigate(['/login'])
localStorage.removeItem('token')
}

  constructor(private _AuthService: AuthService,private _router:Router) {
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue() == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
        this.dataInfo = this._AuthService.currentUser.getValue();
      }
    });
  }

  ngOnInit(): void {}
}
