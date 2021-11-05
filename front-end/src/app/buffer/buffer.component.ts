import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserCreationService } from '../service/user-creation.service';
import { User } from '../models/user';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {
    flag: boolean = false;

  constructor(private auth: AuthService, private userService: UserCreationService) { }
    
  userlist: User[] = [];
    user: User = {
      username: ''
    };

  ngOnInit(): void {
    // this.auth.user$.subscribe(profile =>
      // {
      //   this.userService.userlist().then(result => {
      //     for (let i = 0; i < result.length; i++) {
      //       if (result[i].username == profile.username) {
      //         this.flag = true
      //         this.auth.loginWithRedirect({appState: {target: '/userprofile'}});
      //       }
      //     }
      //     if (this.flag !== true) {
      //       this.auth.loginWithRedirect({appState: {target: '/user-creation'}});
      //     }
        //   })
        // })
      // }
  }
}