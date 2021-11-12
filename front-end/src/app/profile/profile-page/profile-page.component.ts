import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileService]
})

export class ProfilePageComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, public profileService: ProfileService, private router: Router) { }
  id = 0;
  userList:User[];
  currentUser: User = {
    id: 0,
    username:"",
    email: "",
    name: "",
    followings: []
  }; 

  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];

      this.profileService.getUserById(this.id).then((result: User) => {
        this.currentUser= result;
        console.log("followed user" + this.currentUser.followings[1].followingUserName);
      });
    });
  }

  GetPosts(): void {
    var whatever = this.profileService.getAllPostsAndCommentsByUser("Bao3");
    console.log(whatever);
  }

}
