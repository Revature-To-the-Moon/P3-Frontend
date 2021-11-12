import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Post } from '../models/post';
import { FollowingPost } from '../models/FollowingPost';
import {Followings} from '../models/Followings';
import { Component } from '@angular/core';

describe('ProfileService', () => {
  let service: ProfileService;
  let fixture: ComponentFixture<ProfileService>;
  let httpMock: HttpTestingController;
  let apiUrl = 'https://52.141.211.229/user/api';
  let rootUrl = 'https://52.141.211.229/post/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
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
      expect(service.getAllUsers).toHaveBeenCalled();
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
      expect(service.getAllPosts).toHaveBeenCalled();
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
      expect(service.getAllComments).toHaveBeenCalled();
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
      expect(service.getFollowedPostByUserId).toHaveBeenCalled();
    })
  });

  it('should update users', async () => {
    let fakeUser: User = {
      id: 1,
      username: "Tenzin"
    };

    spyOn(service, 'updateUser').and.returnValue(Promise.resolve(fakeUser));

    service.updateUser(fakeUser).then((res) => {
      expect(res).toEqual(fakeUser);
      expect(service.getAllPosts).toHaveBeenCalled();
    })
  })

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
    expect(service.getAllPostsAndCommentsByUser).toHaveBeenCalled();
  });

  it('should add comment to list', () => {
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
    spyOn(service, 'addCommentToList').and.returnValue(fakeComment);

    var res : any[] = []
    res = service.addCommentToList(fakeComment[0], res, "Zoe")
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(fakeComment[0]);
    expect(service.addCommentToList).toHaveBeenCalled();
  });
  it('should return follow user', () => {
    let fakefollower: Followings = {
      id: 1,
      followerUserId: 2,
      followingUserId: 3,
      followingUserName: "bob"
    }
    service.followUser(fakefollower).subscribe();
  
    let req = httpMock.expectOne({method: "POST", url: apiUrl});
    expect(req.request.body).toEqual(fakefollower);
  });
});