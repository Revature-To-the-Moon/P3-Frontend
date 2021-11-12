
import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';
import { FollowingPost } from '../models/FollowingPost';
import { RootServiceService } from '../service/root-service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-follow-button-root',
  templateUrl: './follow-button-root.component.html',
  styleUrls: ['./follow-button-root.component.css']
})

export class FollowButtonRootComponent implements OnInit {

  @Input() id = 0;
  followingId = 0;
  postname = "";
  isFollow = false;
  newFollowing: FollowingPost ={
    postname: '',
    rootId: 0,
    userId: 0
  };

  currentUser: User = {
    id: 0,
    username:"",
    email: "",
    name: "",
    followings: []
  }; 
  constructor(public profileService: ProfileService, public auth: AuthService, public rootService: RootServiceService) { }


  ngOnInit(): void {
    console.log("in ngOnInit for follow button");
    if (this.auth.isAuthenticated$)
    {
      this.auth.user$.subscribe(
        (profile) => (this.currentUser.username = profile.preferred_username))

      this.auth.user$.subscribe((user) => {
        if (user?.preferred_username) {
          this.currentUser.username = user.preferred_username;
          this.profileService.getUserByName(this.currentUser.username).then((result: User) => {
            this.currentUser= result;
            
        // this.isFollow = this.profileService.checkFollowingPost(this.id, this.currentUser.id);
        this.profileService.getFollowedPostByUserId(this.currentUser.id).then((result: FollowingPost[]) => {
          let listOfFollowings = result;
          console.log(listOfFollowings)
          for(let i = 0; i < listOfFollowings.length; i++){
            if (listOfFollowings[i].rootId == this.id){
              this.isFollow = true;
              this.followingId=listOfFollowings[i].id;
              break;
            }
          }
        })    
          });
        }
      })
    }
    
  }
  ngOnChanges(){
    
  }
  
  onClick() {
    if(this.isFollow== false){
      
    console.log("Click function activated")
      this.rootService.getRootById(this.id).then((result: Post) => {
        this.newFollowing.postname= result.title;
        this.newFollowing.rootId= this.id;
        this.newFollowing.userId= this.currentUser.id;
        this.profileService.followPost(this.newFollowing);
        console.log(this.newFollowing)
      });
      };
      if(this.isFollow == true){
        console.log("unfollowing...")
        this.profileService.unfollowPost(this.followingId);
      }
      
    };
  }