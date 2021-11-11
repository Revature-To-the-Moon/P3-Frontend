import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserCreationService } from './user-creation.service';

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
});
