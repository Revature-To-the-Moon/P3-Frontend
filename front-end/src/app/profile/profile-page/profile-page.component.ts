import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileService]
})
export class ProfilePageComponent implements OnInit {

  constructor(private currentRoute: ActivatedRoute, public profileService: ProfileService, private router: Router) { }
  isFollow = false;
  id = 0;

  currentUser: User = {
    id: 0,
    username:"",
    email: "",
    name: "",
    followedUsers: []
  }; 


  ngOnInit(): void {
    console.log("ngOnInit for profile-page")
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];

      this.profileService.getUserById(this.id).then((result: User) => {
        this.currentUser= result;
      });
    });
    
  }

}
