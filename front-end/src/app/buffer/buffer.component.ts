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

  userList: User[];
  user: User = {
    username: ''
  };

  ngOnInit(): void {
    
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.UserCreationService.userName = this.user.username;
        
        // Service to get all users
        this.UserCreationService.getAllUsers().then((result:User[]) => {
          this.userList = result;
          

          for (let i = 0; i < this.userList.length; i++) {
        
            if (this.userList[i].username != profile.preferred_username && i == this.userList.length) {
              console.log(profile.preferred_username)
                  
                 //this.UserCreationService.AddObject(this.user)
                
          
              }
  
            }
        })
      
      
          // //ask if this should be !== true since we want to check if the username is NOT there..?
          
          // Post this.UserCreationService.userName into the userdb
          
        // })
        //   this.auth.loginWithRedirect({appState: {target: '/root'}});
      }
    )}
}
