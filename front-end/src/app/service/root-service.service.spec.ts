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

  //Root Tests//
  it('addRoot should add new story', async () => {
    let fakePost = {
      id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      dateTime: null,
      userName: 'ToTheMoon1234',
      totalVote: 5,
      comments: []
    }

    spyOn(service, 'addRoot').and.returnValue(Promise.resolve(fakePost));

    await service.addRoot(fakePost).then((res) => {
      expect(service.addRoot).toHaveBeenCalled();
      expect(res).toEqual(fakePost);
    });
  });

  it('getAllRoots should return array of stories', async () => {

    let fakeData: Post[] = [
      {
        id: 1,
        title: 'Walking the Dog',
        message: 'It was sunday morning when I...',
        dateTime: null,
        userName: 'ToTheMoon1234',
        totalVote: 5,
        comments: []
      },
      {
        id: 2,
        title: 'Late night TV',
        message: 'I watched cartoons last night ...',
        dateTime: null,
        userName: 'WoWoWubzy456',
        totalVote: 5,
        comments: []
      }
    ];

    spyOn(service, 'getAllRoots').and.returnValue(Promise.resolve(fakeData));
    await service.getAllRoots().then((res) => {
      expect(service.getAllRoots).toHaveBeenCalled();
      expect(res.length).toEqual(2);
    });
  });

  it('getRootById should return a specific root', async () => {
    let fakePost = {
      id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      dateTime: null,
      userName: 'ToTheMoon1234',
      totalVote: 5,
      comments: []
    }
    spyOn(service, 'getRootById').and.returnValue(Promise.resolve(fakePost));
    await service.getRootById(1).then((res) => {
      expect(service.getRootById).toHaveBeenCalledWith(1);
      expect(res).toEqual(fakePost);
    })
  });
  //comment tests//

  it('addComment should post new comment', async () => {
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

  it('getCommentById should return specific comment', async () => {
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
  //vote tests//

  it('getAllVotes should get all votes', async () => {
    let fakeVotes: Vote[] = [{
      id: 1,
      userName: 'Wowowubzy3456',
      value: 12,
      commentId: 8
    },
    {
      id: 2,
      userName: 'ToTheMoon1234',
      value: 10,
      commentId: 7
    }];
    spyOn(service, 'getAllVotes').and.returnValue(Promise.resolve(fakeVotes));
    await service.getAllVotes().then((res) => {
      expect(service.getAllVotes).toHaveBeenCalled();
      expect(res.length).toEqual(2);
    });
  });

  it('addVote should post new vote', async() => {
    let fakeVote = {
      id: 2,
      userName: 'ToTheMoon1234',
      value: 10,
      commentId: 7
    }
    spyOn(service, 'addVote').and.returnValue(Promise.resolve(fakeVote));
    await service.addVote(fakeVote).then((res) => {
      expect(service.addVote).toHaveBeenCalled();
      expect(res).toEqual(fakeVote);
    });
  });

  it('updateVote should update vote', async() => {
    let fakeVote = {
      id: 2,
      userName: 'ToTheMoon1234',
      value: 10,
      commentId: 7
    }
    spyOn(service, 'updateVote').and.returnValue(Promise.resolve(fakeVote));
    await service.updateVote(fakeVote).then((res) => {
      expect(service.updateVote).toHaveBeenCalled();
      expect(res).toEqual(fakeVote);
    });
  });

  it('getCommentById should return specific comment', async () => {
    let fakeVote = {
      id: 2,
      userName: 'ToTheMoon1234',
      value: 10,
      commentId: 7
    }
    spyOn(service, 'deleteVote').and.returnValue(Promise.resolve(null));
    await service.deleteVote(2).then((res) => {
      expect(service.deleteVote).toHaveBeenCalledWith(2);
      expect(res).toEqual(null);
    })
  });

});
