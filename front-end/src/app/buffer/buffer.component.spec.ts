import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import {By} from '@angular/platform-browser';
import { BufferComponent } from './buffer.component';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { RootComponent } from '../root/root.component';
import { UserCreationService } from '../service/user-creation.service';

describe('BufferComponent', () => {
  let component: BufferComponent;
  let fixture: ComponentFixture<BufferComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'root', component: RootComponent}]),
        AuthModule.forRoot(
        {
          domain: 'dev-0w--5cqa.us.auth0.com',
          clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        })],
      providers: [{ provide: UserCreationService}]
    })
    .compileComponents();
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //or declare variable here
  });

  it('should create', () => {
    //declare variable here
    expect(component).toBeTruthy();
    router.navigateByUrl("/root").then(() => {
      expect(location.path()).toBe("/root");
    })
  });

  it('should have a buffer', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.buffer'));
    expect(buttons.length >= 1).toBeTruthy();
  });

/*
  it('should assign auth0 preferred username to user.username', () => {
    component.ngOnInit();
  })
*//*
  it('should call ngOnInit', () =>
  {
    spyOn(component, 'ngOnInit' ).and.stub();
    component.ngOnInit();
    expect(component.ngOnInit()).toHaveBeenCalled();
  })*/
})
