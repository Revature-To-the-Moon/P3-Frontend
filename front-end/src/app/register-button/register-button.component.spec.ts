import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { UserCreationService } from '../service/user-creation.service';

import { RegisterButtonComponent } from './register-button.component';

describe('RegisterButtonComponent', () => {
  let component: RegisterButtonComponent;
  let fixture: ComponentFixture<RegisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(
        {
          domain: 'dev-0w--5cqa.us.auth0.com',
          clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        }
      )],
      declarations: [ RegisterButtonComponent, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
