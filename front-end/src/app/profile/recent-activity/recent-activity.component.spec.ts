import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecentActivityComponent } from './recent-activity.component';
import { DebugElement, SimpleChange } from '@angular/core';


describe('RecentActivityComponent', () => {
  let component: RecentActivityComponent;
  let fixture: ComponentFixture<RecentActivityComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentActivityComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentActivityComponent);
    component = fixture.componentInstance;
    fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the MANUAL execution of the OnChanges', () => {
    component.id = 4;
    component.ngOnChanges({
      id: new SimpleChange(null, component.id, null)
    });
    fixture.detectChanges();
    expect (component.message).toContain('ngOnChanges Executed');
  });
});
