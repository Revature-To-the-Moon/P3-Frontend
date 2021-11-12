import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserCreationService } from './user-creation.service';
import { User } from '../models/user';

describe('UserCreationService', () => {
  let service: UserCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of users', async () => {
    let userList: User[] = [ {
      username: '',
    } ];

    spyOn(service, 'getAllUsers').and.returnValue(Promise.resolve(userList));

  });

  it('should add user to list', () => {
    let user: User = {
      username: 'zoe',
    };
    spyOn(service, 'AddObject').and.returnValue(Promise.resolve(user));
  });
});
