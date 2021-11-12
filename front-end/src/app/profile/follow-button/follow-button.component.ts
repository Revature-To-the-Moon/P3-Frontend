import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Followings } from 'src/app/models/Followings';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() isFollow = false;
  @Input() follower: Followings;
  @Output() toggle = new EventEmitter<boolean>();

  follows: Followings = {
    id: 0,
    followerUserId: 0,
    followingUserId: 0,
    followingUserName: ''
  }

  constructor(private profileService: ProfileService) { }


  ngOnInit(): void { }
  
  onClick() {
    this.isFollow = !this.isFollow;
  }
}
