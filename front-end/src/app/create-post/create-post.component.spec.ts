import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootServiceService } from '../service/root-service.service';

import { CreatePostComponent } from './create-post.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let service: RootServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, AuthModule.forRoot({
        domain: 'dev-0w--5cqa.us.auth0.com',
        clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
      })]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when the form is submitted', () => {
    spyOn(component, 'onSubmit');

    let form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null)

    expect(component.onSubmit).toHaveBeenCalled();
  })
});
