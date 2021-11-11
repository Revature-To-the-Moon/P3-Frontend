import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FollowButtonComponent } from './follow-button.component';
import { By } from '@angular/platform-browser';

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
    fixture.debugElement;
    TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change on click', () => {
    spyOn(component, 'onClick');
    fixture.debugElement.query(By.css('ng-button')).nativeElement.click();
    expect(component.onClick).toHaveBeenCalled();
    });

    it('should follow', () => {
      component.isFollow = false;
      component.onClick();
      expect(component.isFollow).toBe(true);
    });

    it('should unfollow', () => {
      component.isFollow = true;
      component.onClick();
      expect(component.isFollow).toBe(false);
    });
});
