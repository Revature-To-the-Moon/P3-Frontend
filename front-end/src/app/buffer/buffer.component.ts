import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';
import { UserCreationService } from '../service/user-creation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {
  flag: boolean = false;

  constructor(private auth: AuthService, private http: HttpClient, private UserCreationService:UserCreationService) { }

  user: User = {
    username: ''
  };

  ngOnInit(): void {
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.UserCreationService.userName = this.user.username;

        // Service to get all users
        this.UserCreationService.getAllUser().then(result => {
          
          // Loop through all usernames
          for (let i = 0; i < result.length; i++) {

            // If username NOT in db
            if (result[i].username !== profile.preferred_username) {
              this.flag = true
              // Post this.UserCreationService.userName into the userdb
              this.http.post<User>('https://52.141.211.229/user/api/posts' , {title: 'Frontend POST Request to userdb'})
            }
          }
        })
          this.auth.loginWithRedirect({appState: {target: '/root'}});
      }
    )}
}
