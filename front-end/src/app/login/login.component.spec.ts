import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { AuthModule } from '@auth0/auth0-angular';
import { Subject } from 'rxjs';
import { UserCreationService } from '../service/user-creation.service';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRoute: ActivatedRoute = new ActivatedRoute;
  let service: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterModule, HttpClientTestingModule, RouterTestingModule, AuthModule.forRoot(
        {
            domain: 'dev-0w--5cqa.us.auth0.com',
            clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        }
        )],

      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    })
    .compileComponents();

    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send data on submit', () => {
    const AuthServiceSpy = jasmine.createSpyObj('AuthService',['Login']);

    const stubLogin = 'stub login';
    AuthServiceSpy.Login.and.returnValue(stubLogin);



    // let fixture = TestBed.createComponent(LoginComponent)
    // let component: LoginComponent = fixture.componentInstance;
    // let element = fixture.nativeElement;

    // fixture.detectChanges();

    // expect(element.querySelector('#userService-username').value).toEqual(expectedUsername);
    // element.querySelector('button').click();


  });
});
function expectedUsername(expectedUsername: any) {
  throw new Error('Function not implemented.');
}

