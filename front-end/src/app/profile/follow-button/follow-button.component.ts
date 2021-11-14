import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

import { Followings } from 'src/app/models/Followings';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})

export class FollowButtonComponent implements OnInit {
  isFollow = false;
  @Input() follower: Followings;
  @Input() id = 0;
  @Output() toggle = new EventEmitter<boolean>();

  follows: Followings = {
    id: 0,
    followerUserId: 0,
    followingUserId: this.id,
    followingUserName: 'bob'
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void { }
  
  onClick() {
    this.isFollow = !this.isFollow;
    if(this.isFollow == true){
      console.log(this.isFollow);
      console.log(this.id);
      this.profileService.followUser(this.follows).subscribe(
        data => {
          this.isFollow = true;
          this.ngOnInit();
        }
      );
    } else if (this.isFollow == false) {
      console.log(this.isFollow);
      console.log(this.id);
      this.profileService.unfollowUser(this.follows).subscribe(
        data => {
          this.isFollow = false;
          this.ngOnInit();
        }
      );
    }
  }
}