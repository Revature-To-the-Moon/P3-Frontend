import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { Root } from 'src/app/models/root';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {
  @Input() id = 0;
  message: string;
  user!: User;
  roots!: Root[];
  comments!: Comment[];
  activity: any[] = [];

  constructor(private route: ActivatedRoute, public profileService: ProfileService) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.message = 'ngOnChanges Executed'
    this.comments = [];
    this.roots = [];
    this.activity = [];
    this.profileService.getUserById(this.id).then((result: User) => {
      this.profileService.getAllRoots().then((roots: Root[]) => {
        this.profileService.getAllComments().then((comments: Comment[]) => {
          this.user = result;
          this.roots = roots.filter(x => x.userName == this.user.name);
          this.comments = comments.filter(x => x.userName == this.user.name);

          this.activity = (this.roots);
          this.comments.forEach(comment => {
            this.activity.push(comment);
          });
          console.log(this.activity);
        })
      })
    })
  }


}
