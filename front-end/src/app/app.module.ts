import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'dev-0w--5cqa.us.auth0.com',
      clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
