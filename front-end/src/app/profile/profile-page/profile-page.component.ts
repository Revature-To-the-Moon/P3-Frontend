import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/models/user';
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

  users: any = this.profileService.getOne(1)

  ngOnInit(): void {
    console.log(this.users)
    this.profileService.getAll();
  }

  onClick() {
    this.isFollow = !this.isFollow;
  }

}
