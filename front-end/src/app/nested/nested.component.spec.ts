import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NestedComponent } from './nested.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule } from '@auth0/auth0-angular';

import { FormsModule } from '@angular/forms';


describe('NestedComponent', () => {
  let component: NestedComponent;
  let fixture: ComponentFixture<NestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedComponent ],
      imports: [RouterModule, FormsModule, RouterTestingModule, HttpClientTestingModule, AuthModule.forRoot(
        {
          domain: 'dev-0w--5cqa.us.auth0.com',
          clientId: '4LqYhiuu6amu7r3BOQH38phFDBycgDQB'
        }
        )]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
