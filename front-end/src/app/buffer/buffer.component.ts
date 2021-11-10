import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';
import { UserCreationService } from '../service/user-creation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {
  flag: boolean = false;



  constructor(private auth: AuthService, private http: HttpClient, private UserCreationService:UserCreationService, private router: Router) { }

  userList: User[];
  user: User = {
    username: ''
  };

  ngOnInit(): void {
    
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.UserCreationService.userName = this.user.username;
        
        
        this.UserCreationService.getAllUsers().then((result:User[]) => {
          this.userList = result;
          for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].username != profile.preferred_username && i + 1 == this.userList.length) {
                this.UserCreationService.AddObject(this.user)
              }
            }
            this.router.navigateByUrl('/root');
        })
    
          
      }
    )}
}
