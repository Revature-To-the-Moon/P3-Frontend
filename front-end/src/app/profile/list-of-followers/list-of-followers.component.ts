import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-list-of-followers',
  templateUrl: './list-of-followers.component.html',
  styleUrls: ['./list-of-followers.component.css']
})
export class ListOfFollowersComponent implements OnInit {
  @Input() id = 0;
  list!: number[];
  followedList: User[] = [];


  constructor(private route: ActivatedRoute,public profileService: ProfileService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("detected a change");
    this.followedList=[];
    this.profileService.getUserById(this.id).then((result: User) => {
      console.log("Within profileService.getUserById");
      this.list= result.followedUsers;
      console.log("list id is now "+this.list);

      this.list.forEach(id => {
        this.profileService.getUserById(id).then((result: User) => {
          this.followedList.push(result);
        })
      });
    });
  }
}
