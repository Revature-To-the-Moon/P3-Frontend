import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Followings } from 'src/app/models/Followings';
import { isTemplateSpan } from 'typescript';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() isFollow = false;
  following!: Followings[];
  followingUserName: string;


  constructor(public profileService: ProfileService) { }


  ngOnInit(): void {}
  
  onClick() {
    this.isFollow = !this.isFollow;
  }
}
