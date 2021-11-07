import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { BufferComponent } from './buffer.component';

describe('BufferComponent', () => {
  let component: BufferComponent;
  let fixture: ComponentFixture<BufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a buffer', () => {
    const buttons = fixture.debugElement.queryAll(By.css('center'));
    expect(buttons.length >= 1).toBeTruthy();
  });
});
