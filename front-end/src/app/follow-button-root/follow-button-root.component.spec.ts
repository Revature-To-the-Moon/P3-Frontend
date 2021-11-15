import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FollowButtonRootComponent } from './follow-button-root.component';
import { AuthModule } from '@auth0/auth0-angular';

describe('FollowButtonRootComponent', () => {
  let component: FollowButtonRootComponent;
  let fixture: ComponentFixture<FollowButtonRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowButtonRootComponent ],
      imports: [ HttpClientTestingModule, AuthModule.forRoot(
        {
          domain: 'dev-0w--5cqa.us.auth0.com',
          clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        })]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowButtonRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
