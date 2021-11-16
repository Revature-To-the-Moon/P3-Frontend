import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RootServiceService } from '../service/root-service.service';
import { AuthModule } from '@auth0/auth0-angular';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { CommentComponent } from './comment.component';


describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let service: RootServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent, DateAgoPipe],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, AuthModule.forRoot({
        domain: 'dev-0w--5cqa.us.auth0.com',
        clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
      })]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    let form = fixture.debugElement.query(By.css('form'))

    form.triggerEventHandler('ngSubmit', null);

    expect(component.onSubmit).toHaveBeenCalled();
  })

  it('should check if a comment is liked', () => {
    const mockVote = [{
      // vote info
      id: 99,
      userName: 'Richard',
      value: 1,
      commentId: 99
    }]
    component.user = 'Richard';
    var reply = component.checkIfCommentIsLiked(mockVote);
    expect(reply == true);
    component.user = 'Blachard';
    reply = component.checkIfCommentIsLiked(mockVote);
    expect(reply == false);
  }),

  it('should check the value of a liked comment', () => {
    const mockVote = [{
      // vote info
      id: 99,
      userName: 'Richard',
      value: 1,
      commentId: 99
    }]
    component.user = 'Richard';
    var reply = component.checkIfCommentIsLikedValue(mockVote);
    expect(reply == true);
    component.user = 'Blachard';
    reply = component.checkIfCommentIsLikedValue(mockVote);
    expect(reply == false);
  })

  // like comment

  // goToUserProfile
  it('should go to userProfile', () => {
    let username = 'Hello';
    
    component.goToUserProfile(username);
    // then it goes into a service...
  })

  // unLikeComment

  // 
});
