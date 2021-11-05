import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import {By} from '@angular/platform-browser';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRoute: ActivatedRoute = new ActivatedRoute;

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

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one button on the page', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length >= 1).toBeTruthy();
  });

  it('should have one button with "Login" on the page', () => {
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    expect(nativeButton.textContent).toBe('Login');
  });
  

  
  it('should have one button with "Register" on the page', () => {
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[1].nativeElement;
    expect(nativeButton.textContent).toBe('Register');
  });


  it('should send data on submit', async () => {
    const AuthServiceSpy = jasmine.createSpyObj('AuthService',['Login']);

    let fixture = TestBed.createComponent(LoginComponent)
    let component: LoginComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

    fixture.detectChanges();

    // expect(element.querySelector('#userService-username').value).toEqual(expectedUsername);

    // element.querySelector(component.Loginfunc).toHaveBeenCalled();

    // spyOn(component, 'click').and.returnValue();
    // let buttonElement = fixture.debugElement.query(By.css('table'));;
    // spyOn(component, 'click');
    // await buttonElement.triggerEventHandler('click');
    // fixture.detectChanges();
    // expect(component.Loginfunc).toHaveBeenCalled();


  });


});
