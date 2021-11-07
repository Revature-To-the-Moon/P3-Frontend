import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { RootComponent } from './root/root.component';
import { CommentComponent } from './comment/comment.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';
import { FollowButtonComponent } from './profile/follow-button/follow-button.component';
import { BufferComponent } from './buffer/buffer.component';

const routes: Routes = [
  { path: 'root', component: RootComponent },
  { path: 'follow', component: FollowButtonComponent },
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'comment', component: CommentComponent },
  { path: '', component: LoginComponent },
  { path: 'buffer', component: BufferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
