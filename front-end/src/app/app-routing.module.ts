import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';
import { FollowButtonComponent } from './profile/follow-button/follow-button.component';

const routes: Routes = [
  {path: 'root', component: RootComponent },
  {path: 'follow', component: FollowButtonComponent},
  {path: 'profile/:id', component: ProfilePageComponent },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
