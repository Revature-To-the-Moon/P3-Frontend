import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentActivityComponent } from './profile/recent-activity/recent-activity.component';
import { ListOfFollowersComponent } from './profile/list-of-followers/list-of-followers.component';
import { FollowedPostsComponent } from './profile/followed-posts/followed-posts.component';
import { FollowButtonComponent } from './profile/follow-button/follow-button.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RootComponent } from './root/root.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    CreatePostComponent,
    RecentActivityComponent,
    ListOfFollowersComponent,
    FollowedPostsComponent,
    FollowButtonComponent,
    ProfilePageComponent,
    NavBarComponent,
    FilterBarComponent,
    CommentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
