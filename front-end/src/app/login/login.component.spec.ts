import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth0/auth0-angular';
import { AuthModule } from '@auth0/auth0-angular';

const AuthServiceSpy = jasmine.createSpyObj('AuthService',['Login']);


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

  it('loginService Loginfunc() should be called ', fakeAsync(() => {
    
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(AuthServiceSpy.login).toHaveBeenCalled();
  }));

  

})

function updateForm(username: any, password: any) {
  throw new Error('Function not implemented.');
}
