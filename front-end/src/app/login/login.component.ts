import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (console.log(profile)))
  }

  Loginfunc(){
    this.auth.loginWithRedirect({ appState: { target: '/' } });
  }

  Registerfunc(){
    alert('right here bruv')
  }

  Logoutfunc(){
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
