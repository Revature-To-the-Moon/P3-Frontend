import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootComponent } from './root.component';
import { RouterTestingModule } from '@angular/router/testing'
import { FilterBarComponent } from '../filter-bar/filter-bar.component';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RootComponent, FilterBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
