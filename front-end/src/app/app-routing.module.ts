import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
=======
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: 'root',
    component: RootComponent,
  }
>>>>>>> dede38d5b4455a51fee9793b23737df4240b46c8
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
