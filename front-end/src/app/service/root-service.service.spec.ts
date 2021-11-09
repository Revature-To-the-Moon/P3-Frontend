import { TestBed } from '@angular/core/testing';
import { RootServiceService } from './root-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Root } from '../models/root'

describe('RootServiceService', () => {
  let service: RootServiceService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RootServiceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addRoot should add new story', async () => {
    let fakeRoot = {
      id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      totalVote: 2,
      dateTime: new Date('November 4, 2021 03:24:00'),
      userName: 'ToTheMoon1234'
    }

    spyOn(service, 'addRoot').and.returnValue(Promise.resolve(fakeRoot));

    await service.addRoot(fakeRoot).then((res) => {
      expect(service.addRoot).toHaveBeenCalled();
      expect(res).toEqual(fakeRoot);
    });
  });


  it('getAllRoots should return array of stories', async () => {

    let fakeData: Root[] = [
      {
        id: 1,
        title: 'Walking the Dog',
        message: 'It was sunday morning when I...',
        totalVote: 4,
        dateTime: new Date('November 4, 2021 03:24:00'),
        userName: 'ToTheMoon1234'
      },
      {
        id: 2,
        title: 'Late night TV',
        message: 'I watched cartoons last night ...',
        totalVote: 6,
        dateTime: new Date('January 20, 2021 05:45:00'),
        userName: 'WoWoWubzy456'
      }
    ];
    spyOn(service, 'getAllRoots').and.returnValue(Promise.resolve(fakeData));
    await service.getAllRoots().then((res) => {
      expect(service.getAllRoots).toHaveBeenCalled();
      expect(res.length).toEqual(2);
    });
  });


  it('getRootById should return a specific root', async () => {
    let fakeRoot = {
      id: 1,
      title: 'Walking the Dog',
      message: 'It was sunday morning when I...',
      totalVote: 1,
      dateTime: new Date('November 4, 2021 03:24:00'),
      userName: 'ToTheMoon1234'
    }
    spyOn(service, 'getRootById').and.returnValue(Promise.resolve(fakeRoot));
    await service.getRootById(1).then((res) => {
      expect(service.getRootById).toHaveBeenCalledWith(1);
      expect(res).toEqual(fakeRoot);
    })
  });

});
