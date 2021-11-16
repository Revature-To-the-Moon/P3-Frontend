import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserCreationService } from './user-creation.service';
import { User } from '../models/user';

const expectedUserUrl = 'https://52.141.211.229/user/api'

describe('UserCreationService', () => {
  let service: UserCreationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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

});
