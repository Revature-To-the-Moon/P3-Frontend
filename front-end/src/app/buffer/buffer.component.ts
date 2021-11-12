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



  constructor(private auth: AuthService, private http: HttpClient, private userService: UserCreationService, private router: Router) { }

  userList: User[];
  user: User = {
    username: ''
  };
  myUserName: string;

  ngOnInit(): void {
    this.auth.user$.subscribe(profile =>
      {
        this.user.username = profile.preferred_username;
        this.userService.userName = this.user.username;
        this.userService.getUserByName(profile.preferred_username).then((result: User) => {
          if (result == null)
          {
            this.userService.AddObject(this.user)
          }
        })
        this.router.navigateByUrl('/root');
      })
  }
}
