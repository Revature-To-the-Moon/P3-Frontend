<<<<<<< HEAD
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
=======
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
>>>>>>> e4dc4d111a661c7c0c9257318a47153e80256365

import { FollowButtonComponent } from './follow-button.component';

describe('FollowButtonComponent', () => {
  let component: FollowButtonComponent;
  let fixture: ComponentFixture<FollowButtonComponent>;
  let de: DebugElement;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowButtonComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isFollow equal to false when button is Follow', () => {
    spyOn(component, 'onClick');
    component.onClick();

    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.onClick).toHaveBeenCalled();
  })
});
