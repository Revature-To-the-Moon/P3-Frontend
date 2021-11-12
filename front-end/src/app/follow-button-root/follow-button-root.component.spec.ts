import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowButtonRootComponent } from './follow-button-root.component';

describe('FollowButtonRootComponent', () => {
  let component: FollowButtonRootComponent;
  let fixture: ComponentFixture<FollowButtonRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowButtonRootComponent ]
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
