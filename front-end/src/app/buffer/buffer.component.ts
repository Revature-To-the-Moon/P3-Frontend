import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from '../service/profile.service';
import { User } from '../models/user';


@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {
    

  constructor(private auth: AuthService, private profileService: ProfileService) { }
    
  
    user: User = {
      username: ''
    };

  ngOnInit(): void {
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.auth.loginWithRedirect({appState: {target: '/root'}});
      }
    )}
}
          