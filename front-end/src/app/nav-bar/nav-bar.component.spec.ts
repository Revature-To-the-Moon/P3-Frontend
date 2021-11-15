import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonsComponent } from '../login-buttons/login-buttons.component';
import { RegisterButtonComponent } from '../register-button/register-button.component';
import { SearchComponent } from '../search/search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from './nav-bar.component';
import { By } from '@angular/platform-browser'


describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,AuthModule.forRoot(
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
