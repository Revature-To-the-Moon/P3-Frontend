import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() isFollow = false;

  constructor(public profileService: ProfileService) { }


  ngOnInit(): void {
  }
  
  onClick() {
    this.isFollow = !this.isFollow;
  }

}
