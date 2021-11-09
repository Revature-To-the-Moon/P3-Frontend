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
  roots!: Root[];
  comments!: Comment[];
  activity: any[] = [];

  constructor(private route: ActivatedRoute, public profileService: ProfileService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.profileService.getUserById(this.id).then((result: User) => {
      this.profileService.getAllRoots().then((roots: Root[]) => {
        this.profileService.getAllComments().then((comments: Comment[]) => {
          this.user = result;
          this.roots = roots.filter(x => x.userName == this.user.name);
          this.comments = comments.filter(x => x.Username == this.user.name);

          this.activity = (this.roots);
          this.comments.forEach(comment => {
            this.activity.push(comment);
          });
        })
      })
    })
  }

}
