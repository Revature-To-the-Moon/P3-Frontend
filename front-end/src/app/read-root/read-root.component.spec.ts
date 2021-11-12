import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRootComponent } from './read-root.component';

describe('ReadRootComponent', () => {
  let component: ReadRootComponent;
  let fixture: ComponentFixture<ReadRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
