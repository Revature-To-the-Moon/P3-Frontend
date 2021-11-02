import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFollowersComponent } from './list-of-followers.component';

describe('ListOfFollowersComponent', () => {
  let component: ListOfFollowersComponent;
  let fixture: ComponentFixture<ListOfFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
