import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { UserCreationService } from '../service/user-creation.service';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document, public userService: UserCreationService) { }

  

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.userService.username = profile.nickname))
  }

  Loginfunc(){
    this.auth.loginWithRedirect({ appState: { target: '/' } });
  }

  Registerfunc(){
    alert('right here bruv')
    if(this.userService.username != undefined)
    {
    console.log(this.userService.username + ' Larry, it works');
    this.auth.user$.subscribe(
      (profile) => (console.log(profile)))
    }
  }

  Logoutfunc(){
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
