import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';
import { UserCreationService } from '../service/user-creation.service';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor(private auth: AuthService, private UserCreationService:UserCreationService) { }

  user: User = {
    username: ''
  };

  ngOnInit(): void {
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.UserCreationService.userName = this.user.username;
        this.auth.loginWithRedirect({appState: {target: '/root'}});
      }
    )}
}
