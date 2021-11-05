import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RootServiceService } from '../service/root-service.service';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let service: RootServiceService;
  let router: Router; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ], 
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(RootServiceService);
    router = TestBed.inject(Router)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when form is submitted', () =>{
    spyOn(component, 'onSubmit').and.returnValue();

    let form = fixture.debugElement.query(By.css('form'))

    form.triggerEventHandler('ngSubmit', null);

    expect(component.onSubmit).toHaveBeenCalled();
  })
});
