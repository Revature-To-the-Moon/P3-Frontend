import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserCreationService } from '../service/user-creation.service';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document, public userService: UserCreationService) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated$)
    {
      this.auth.user$.subscribe(
        (profile) => (this.userService.username = profile.preferred_username))
    }
  }

  Registerfunc(){
    this.auth.loginWithRedirect({ screen_hint: 'signup', appState: { target: '/' } });
  }

}
