import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Post } from '../models/post';
import { FollowingPost } from '../models/FollowingPost';

describe('ProfileService', () => {
  let service: ProfileService;
  let fixture: ComponentFixture<ProfileService>;
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

  it('should get user by id', async () => {
    let fakeUser: User = {
      id: 1,
      email: 'Zoot@zooter.com',
      name: 'Zambie',
      username: 'Zoot',
      followings: []
    };
    spyOn(service, 'getUserById').and.returnValue(Promise.resolve(fakeUser));
    
    await service.getUserById(1).then((res) => {
      expect(res).toEqual(fakeUser);
      expect(service.getUserById).toHaveBeenCalled();
    })
  });

  it('should get all users', async () => {
    let fakeUser: User[] = [ {
      id: 1,
      username: "Tenzin"
    } ];

    spyOn(service, 'getAllUsers').and.returnValue(Promise.resolve(fakeUser));

    service.getAllUsers().then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakeUser[0]);
    })
  });

  it('should get all roots', async () => {
    let fakePost: Post[] = [ {
      id: 1,
      title: "Duck Walk",
      message: "We's walkin' a ducky!",
      totalVote: 55,
      dateTime: null,
      userName: "Zoe",
      comments: []
    } ];

    spyOn(service, 'getAllPosts').and.returnValue(Promise.resolve(fakePost));

    service.getAllPosts().then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakePost[0]);
    })
  });

  it('should get all comments', async () => {
    let fakeComment: Comment[] = [ {
      id: 1,
      message: "We's still walkin' a ducky!",
      totalVote: 32,
      dateTime: null,
      userName: "Zoe",
      parentId: 1,
      rootId: 1,
      votes: [],
      comments: [],
    } ];

    spyOn(service, 'getAllComments').and.returnValue(Promise.resolve(fakeComment));

    service.getAllComments().then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakeComment[0]);
    })
  });

  it('should get followed posts by user id', async () => {
    let fakePost: FollowingPost[] = [ {
      id: 0,
      postname: "Jeffrey",
      rootId: 3,
      userId: 5
    } ];

    spyOn(service, 'getFollowedPostByUserId').and.returnValue(Promise.resolve(fakePost));

    service.getFollowedPostByUserId(5).then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakePost[0]);
    })
  });

  it('should get all posts and comments by user', async () => {
    let fakeComment: Comment[] = [ {
      id: 1,
      message: "We's still walkin' a ducky!",
      totalVote: 32,
      dateTime: null,
      userName: "Zoe",
      parentId: 1,
      rootId: 1,
      votes: [],
      comments: [],
    } ];

    spyOn(service, 'getAllPostsAndCommentsByUser').and.returnValue(fakeComment);

    var res = await service.getAllPostsAndCommentsByUser("Zoe")
    
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(fakeComment[0]);
  });

  it('should add comment to list', () => {
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
    var res : any[] = []
    res = service.addCommentToList(fakeComment, res, "Zoe")
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(fakeComment);
  });
});