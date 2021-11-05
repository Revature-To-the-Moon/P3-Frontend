import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthModule } from '@auth0/auth0-angular';
import { RecentActivityComponent } from './profile/recent-activity/recent-activity.component';
import { ListOfFollowersComponent } from './profile/list-of-followers/list-of-followers.component';
import { FollowedPostsComponent } from './profile/followed-posts/followed-posts.component';
import { FollowButtonComponent } from './profile/follow-button/follow-button.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RootComponent } from './root/root.component';
<<<<<<< HEAD
import { BufferComponent } from './buffer/buffer.component';
=======
import { CreatePostComponent } from './create-post/create-post.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7a4ce50da55b52acdf9dfa51e74ebcdb71e5adb4

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    CreatePostComponent,
    LoginComponent,
    RecentActivityComponent,
    ListOfFollowersComponent,
    FollowedPostsComponent,
    FollowButtonComponent,
    ProfilePageComponent,
    NavBarComponent,
<<<<<<< HEAD
    BufferComponent,
=======
    FilterBarComponent,
    CommentComponent,
    SearchComponent,
>>>>>>> 7a4ce50da55b52acdf9dfa51e74ebcdb71e5adb4
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-0w--5cqa.us.auth0.com',
      clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
