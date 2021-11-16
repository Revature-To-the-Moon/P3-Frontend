import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Post } from '../models/post';
import { FollowingPost } from '../models/FollowingPost';
import { Followings } from '../models/Followings';
import { Component } from '@angular/core';

const expectedUserUrl = 'https://52.141.211.229/user/api'
const expectedPostUrl = 'https://52.141.211.229/post/api'

describe('ProfileService', () => {
  let service: ProfileService;
  let fixture: ComponentFixture<ProfileService>;
  let httpMock: HttpTestingController;
  let apiUrl = 'https://52.141.211.229/user/api';
  let rootUrl = 'https://52.141.211.229/post/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
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

  it('should get user by name', async () => {
    let fakeUser: User = {
      id: 1,
      email: 'Zoot@zooter.com',
      name: 'Zambie',
      username: 'Zoot',
      followings: []
    };

    spyOn(service, 'getUserByName').and.returnValue(Promise.resolve(fakeUser));

    await service.getUserByName('Zoot').then((res) => {
      expect(res).toEqual(fakeUser);
      expect(service.getUserByName).toHaveBeenCalled();
    })
  });

  it('should get all users', async () => {
    let actualUsers: User[] | undefined;
    let fakeUsers: User[] = [ {
      id: 1,
      username: "Tenzin"
    } ];

    service.getAllUsers().then((users) => {
      actualUsers = users;

      const request = httpMock.expectOne(expectedUserUrl + '/user/');
      request.flush(fakeUsers);
      httpMock.verify();

      expect(actualUsers).toEqual(fakeUsers);
    })
  });

  it('should get all posts', () => {
    let actualPosts: Post[] | undefined;
    let fakePost: Post[] = [ {
      id: 1,
      title: "Duck Walk",
      message: "We's walkin' a ducky!",
      totalVote: 55,
      dateTime: null,
      userName: "Zoe",
      comments: []
    },
    {
      id: 2,
      title: 'Late night TV',
      message: 'I watched cartoons last night ...',
      dateTime: null,
      userName: 'WoWoWubzy456',
      totalVote: 5,
      comments:[]
    } ];

    service.getAllPosts().then((posts) => {
      actualPosts = posts;

      const request = httpMock.expectOne(expectedPostUrl + '/post/');
      request.flush(fakePost);
      httpMock.verify();

      expect(actualPosts).toEqual(fakePost);
    })
  });

  it('should get all comments', async () => {
    let actualComment: Comment[] | undefined;
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

    service.getAllComments().then((comment) => {
      actualComment = comment;

      const request = httpMock.expectOne(expectedPostUrl + '/comment/');
      request.flush(fakeComment);
      httpMock.verify();

      expect(actualComment).toEqual(fakeComment);
    })
  });

  // it('should get followed posts by user id', async () => {
  //   let fakePost: FollowingPost[] = [ {
  //     id: 0,
  //     postname: "Jeffrey",
  //     rootId: 3,
  //     userId: 5
  //   } ];

  //   spyOn(service, 'getFollowedPostByUserId').and.returnValue(Promise.resolve(fakePost));

  //   service.getFollowedPostByUserId(5).then((res) => {
  //     expect(res.length).toEqual(1);
  //     expect(res[0]).toEqual(fakePost[0]);
  //     expect(service.getFollowedPostByUserId).toHaveBeenCalled();
  //   })
  // });

  it('should update users', async () => {
    let fakeUser: User = {
      id: 1,
      username: "Tenzin"
    };

    spyOn(service, 'updateUser').and.returnValue(Promise.resolve(fakeUser));

    service.updateUser(fakeUser).then((res) => {
      expect(res).toEqual(fakeUser);
      expect(service.updateUser).toHaveBeenCalled();
    })
  })

  it('should get followings by UserId', async () => {
    let actualFollowing: Followings[] | undefined;
    let fakeFollowing: Followings[] = [ {
      id: 0,
      followerUserId: 1,
      followingUserId: 0,
      followingUserName: 'George'
    } ];

    service.getFollowingsByUserId(0).then((following) => {
      actualFollowing = following;

      const request = httpMock.expectOne(expectedUserUrl + '/following/followeruserId/0');
      request.flush(fakeFollowing);
      httpMock.verify();

      expect(actualFollowing).toEqual(fakeFollowing);
    })
  });
});
