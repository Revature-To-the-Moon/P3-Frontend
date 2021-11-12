import { TestBed } from '@angular/core/testing';
import { RootServiceService } from './root-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../models/post'
import { Comment } from '../models/Comment'
import { Vote } from '../models/vote'

describe('RootServiceService', () => {
  let service: RootServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RootServiceService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Post Test//
  it('addRoot should add new story', async () => {
    let fakePost = {
      id: 1,
    title: 'Walking the Dog',
    message: 'It was sunday morning when I...',
    dateTime: null,
    userName: 'ToTheMoon1234',
    totalVote: 5,
    comments:[]
    }

    spyOn(service, 'addRoot').and.returnValue(Promise.resolve(fakePost));

    await service.addRoot(fakePost).then((res) => {
      expect(service.addRoot).toHaveBeenCalled();
      expect(res).toEqual(fakePost);
    });
  });

  //Get Test//

  it('getAllRoots should return array of stories', async() => {

    let fakeData: Post[] = [
      {
        id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      dateTime: null,
      userName: 'ToTheMoon1234',
      totalVote: 5,
      comments:[]
      },
      {
        id: 2,
        title: 'Late night TV',
        message: 'I watched cartoons last night ...',
        dateTime: null,
        userName: 'WoWoWubzy456',
        totalVote: 5,
        comments:[]
      }
    ];

    spyOn(service, 'getAllRoots').and.returnValue(Promise.resolve(fakeData));

    await service.getAllRoots().then((res) => {
      expect(service.getAllRoots).toHaveBeenCalled();
      expect(res.length).toEqual(2);
    });
  });


  it('getRootById should return a specific root', async() =>{
    let fakePost = {
      id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      dateTime: null,
      userName: 'ToTheMoon1234',
      totalVote: 5,
      comments:[]
    }
    spyOn(service, 'getRootById').and.returnValue(Promise.resolve(fakePost));
    await service.getRootById(1).then((res) => {
      expect(service.getRootById).toHaveBeenCalledWith(1);
      expect(res).toEqual(fakePost);
    })
  });

  //comment tests//
  
  it('addComment should post new comment', async() => {
    let fakeComment = {
    id: 8,
    parentId: -1,
    rootId: 1,
    message: 'My dog ran into the store...',
    totalVote: 12,
    dateTime: null,
    userName: 'ToTheMoon1234',
    votes: [],
    comments: []
    }
    spyOn(service, 'addComment').and.returnValue(Promise.resolve(fakeComment));
    await service.addComment(fakeComment).then((res) => {
      expect(service.addComment).toHaveBeenCalled();
      expect(res).toEqual(fakeComment);
    });
  });

  it('getCommentById should return specific comment', async()=> {
    let fakeComment = {
      id: 8,
      parentId: -1,
      rootId: 1,
      message: 'My dog ran into the store...',
      totalVote: 12,
      dateTime: null,
      userName: 'ToTheMoon1234',
      votes: [],
      comments: []
      }
    spyOn(service, 'getCommentById').and.returnValue(Promise.resolve(fakeComment));
    await service.getCommentById(8).then((res) => {
    expect(service.getCommentById).toHaveBeenCalledWith(8);
    expect(res).toEqual(fakeComment);
    })
  });

});
