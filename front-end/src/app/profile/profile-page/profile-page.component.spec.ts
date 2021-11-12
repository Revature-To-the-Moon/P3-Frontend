import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfilePageComponent } from './profile-page.component';
import { ProfileService } from 'src/app/service/profile.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing/activatedRouteStub';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let service: ProfileService;
  let activatedRoute: ActivatedRouteStub = new ActivatedRouteStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    })
    .compileComponents();
    service = TestBed.inject(ProfileService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;

    activatedRoute.setParams({id: 5});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should be created', () => {
    expect(component.currentUser).toBeTruthy();
  });

  // it('should assign result to currentUser', async () => {
  //   let fakeUser: User = {
  //     id: 55,
  //     username: "Tenzin",
  //     email: "",
  //     name: "",
  //     followings: []
  //   };
    
  //   spyOn(service, 'getUserById').and.returnValue(Promise.resolve(fakeUser));
    
  //   await component.ngOnInit();
    
  //   expect(service.getUserById).toHaveBeenCalledWith(55);
  //   expect(component.currentUser).toEqual(fakeUser);
  // })
});