import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootComponent } from './root.component';
import { RouterTestingModule } from '@angular/router/testing'
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { Router } from '@angular/router';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;
  let routerSpy = { navigateByUrl: jasmine.createSpy('navigateByUrl') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RootComponent, FilterBarComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to create post`, () => {
    expect(routerSpy.navigateByUrl);
  });

  it(`should navigate to comments`, () => {
    expect(routerSpy.navigateByUrl);
  });
});
