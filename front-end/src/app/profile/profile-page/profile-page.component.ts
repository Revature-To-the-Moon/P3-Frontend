import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  public isFollow: boolean = false;
  ngOnInit(): void {
  }

  onClick() {
    this.isFollow = !this.isFollow;
  }

}
