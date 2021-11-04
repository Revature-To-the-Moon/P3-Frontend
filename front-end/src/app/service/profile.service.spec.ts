import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user by id', () => {
    let fakeUser: User = {
      id: 1,
      email: 'Zoot@zooter.com',
      name: 'Zambie',
      username: 'Zoot',
      followedUsers: []
    };
    // spyOn(service, 'getUserById').and.returnValue(Promise.resolve(fakeUser));
    service.getUserById(1).then((res) => {
      expect(res).toEqual(fakeUser);
      expect(service.getUserById).toHaveBeenCalled();
    })
  });
});