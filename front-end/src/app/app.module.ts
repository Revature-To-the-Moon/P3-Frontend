import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentActivityComponent } from './profile/recent-activity/recent-activity.component';
import { ListOfFollowersComponent } from './profile/list-of-followers/list-of-followers.component';
import { FollowedPostsComponent } from './profile/followed-posts/followed-posts.component';
import { FollowButtonComponent } from './profile/follow-button/follow-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentActivityComponent,
    ListOfFollowersComponent,
    FollowedPostsComponent,
    FollowButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
