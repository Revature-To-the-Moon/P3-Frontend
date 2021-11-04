import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';

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

  it('should get all roots', () => {
    let fakeRoot: Root = {
      id: 1,
      title: "Duck Walk",
      message: "We's walkin' a ducky!",
      totalvote: 55,
      Time: "PLACEHOLDER",
      Username: "Zoe"
    };
    // spyOn(service, 'getUserById').and.returnValue(Promise.resolve(fakeUser));
    service.getAllRoots().then((res) => {
      expect(res.length).toEqual(1);
    })
  });

  it('should get all comments', () => {
    let fakeComment: Comment = {
      id: 1,
      message: "We's still walkin' a ducky!",
      totalvote: 32,
      Time: "PLACEHOLDER",
      Username: "Zoe",
      RootId: 1,
      CommentId: 0
    };
    // spyOn(service, 'getUserById').and.returnValue(Promise.resolve(fakeUser));
    service.getAllComments().then((res) => {
      expect(res.length).toEqual(1);
    })
  });
});