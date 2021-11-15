import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/Comment';
import { RecentActivity } from 'src/app/models/RecentActivity';
import { Root } from 'src/app/models/root';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {
  @Input() username = "";
  message: string;
  user!: User;
  roots!: Root[];
  comments!: Comment[];
  activity: RecentActivity[];
  

  constructor(private route: ActivatedRoute, public profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('searching for recent activity');
    this.activity=this.profileService.getRecentActivity(this.username);
    

    // this.message = 'ngOnChanges Executed'
    // this.profileService.getUserById(this.id).then((user: User) => (
    //   this.activity = this.profileService.getAllPostsAndCommentsByUser(user.name)
    // ))
  }
  toSource(id:number, type:string){
    this.router.navigateByUrl(type+'/'+id);

  }
}
