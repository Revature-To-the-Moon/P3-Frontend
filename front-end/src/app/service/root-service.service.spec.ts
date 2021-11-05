import { TestBed } from '@angular/core/testing';
import { RootServiceService } from './root-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../models/post'

describe('RootServiceService', () => {
  let service: RootServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RootServiceService);
    httpMock = TestBed.inject(HttpTestingController);
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
      date: new Date('November 4, 2021 03:24:00'),
      username: 'ToTheMoon1234'
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
        date: new Date('November 4, 2021 03:24:00'),
        username: 'ToTheMoon1234'
      },
      {
        id: 2,
        title: 'Late night TV',
        message: 'I watched cartoons last night ...',
        date: new Date('January 20, 2021 05:45:00'),
        username: 'WoWoWubzy456'
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
      date: new Date('November 4, 2021 03:24:00'),
      username: 'ToTheMoon1234'
    }
    spyOn(service, 'getRootById').and.returnValue(Promise.resolve(fakePost));
    await service.getRootById(1).then((res) => {
      expect(service.getRootById).toHaveBeenCalledWith(1);
      expect(res).toEqual(fakePost);
    })
  })

});
