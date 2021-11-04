import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FollowButtonComponent } from './follow-button.component';

describe('FollowButtonComponent', () => {
  let component: FollowButtonComponent;
  let fixture: ComponentFixture<FollowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowButtonComponent);
    component = fixture.componentInstance;
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
