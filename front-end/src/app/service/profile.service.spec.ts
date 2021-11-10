import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Post } from '../models/post';
import { FollowingPost } from '../models/FollowingPost';

describe('ProfileService', () => {
  let service: ProfileService;
  let fixture: ComponentFixture<ProfileService>;

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
      totalvote: 55,
      Time: "PLACEHOLDER",
      Username: "Zoe"
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
      totalvote: 32,
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

  it('should get followed posts by user id', () => {
    let fakePost: FollowingPost = {
      id: 0,
      postname: "Jeffrey",
      rootId: 3,
      userId: 5
    };
    service.getFollowedPostByUserId(5).then((res) => {
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(fakePost);
    })
  });

  // it('should get all posts and comments by user', () => {
  //   let fakeComment: Comment = {
  //     id: 1,
  //     message: "We's still walkin' a ducky!",
  //     totalvote: 32,
  //     dateTime: null,
  //     userName: "Zoe",
  //     parentId: 1,
  //     rootId: 1,
  //     votes: [],
  //     comments: [],
  //   };
  //   var res = service.getAllPostsAndCommentsByUser("Zoe")

  //   expect(res.length).toEqual(1);
  //   expect(res[0]).toEqual(fakeComment);
  // });

  it('should add comment to list', () => {
    let fakeComment: Comment = {
      id: 1,
      message: "We's still walkin' a ducky!",
      totalvote: 32,
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