import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileService]
})
export class ProfilePageComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  public isFollow: boolean = false;
  ngOnInit(): void {
    
    this.profileService.getAll();
  }

  onClick() {
    this.isFollow = !this.isFollow;
  }

}
