import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootServiceService } from '../service/root-service.service';

import { CreatePostComponent } from './create-post.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let service: RootServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(RootServiceService)
    router = TestBed.inject(Router)
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
    spyOn(component, 'onSubmit').and.returnValue();

    let form = fixture.debugElement.query(By.css('form'));

    form.triggerEventHandler('ngSubmit', null)

    expect(component.onSubmit).toHaveBeenCalled();
  })
});
