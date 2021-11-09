import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { LoginButtonsComponent } from '../login-buttons/login-buttons.component';
import { RegisterButtonComponent } from '../register-button/register-button.component';
import { SearchComponent } from '../search/search.component';
import { UserCreationService } from '../service/user-creation.service';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(
        {
          domain: 'dev-0w--5cqa.us.auth0.com',
          clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        }
      )],
      declarations: [ NavBarComponent,
      SearchComponent, LoginButtonsComponent, RegisterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
