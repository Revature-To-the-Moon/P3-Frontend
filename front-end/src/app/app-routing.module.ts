import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { RootComponent } from './root/root.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'root',
    component: RootComponent
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
