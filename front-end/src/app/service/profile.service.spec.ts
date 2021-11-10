import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProfileService);
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
      followings: []
    };
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
      totalVote: 55,
      dateTime: new Date('November 4, 2021 03:24:00'),
      userName: "Zoe",
      comments: []
    };
    service.getAllRoots().then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakeRoot);
    })
  });

  it('should get all comments', () => {
    let fakeComment: Comment = {
      id: 1,
      message: "We's still walkin' a ducky!",
      totalVote: 32,
      dateTime: null,
      userName: "Zoe",
      parentId: 1,
      rootId: 1,
      votes: [],
      comments: [],
    };
    service.getAllComments().then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakeComment);
    })
  });
});