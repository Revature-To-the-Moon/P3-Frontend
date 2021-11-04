import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Root } from 'src/app/models/root';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-followed-posts',
  templateUrl: './followed-posts.component.html',
  styleUrls: ['./followed-posts.component.css']
})
export class FollowedPostsComponent implements OnInit {
  @Input() id = 0;
  user!: User;
  roots!: Root;
  comments!: Comment;

  constructor(private route: ActivatedRoute,public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserById(this.id).then((result: User) => {
      this.profileService.getAllRoots().then((roots: Root[]) => {
        this.profileService.getAllComments().then((comments: Comment[]) => {
          this.user = result;
          this.roots = roots[0];
          this.comments = comments[0];
          console.log("Got 'em...?")
        })
      })
    })
  }

}
