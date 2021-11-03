import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import {ActivatedRouteStub} from '../testing/activatedRouteStub';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let activatedRoute: ActivatedRouteStub = new ActivatedRouteStub()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute 
        }
      ]
    })
    .compileComponents();

    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenRenderingDone()
    expect(component).toBeTruthy();
  });

  it('should call Loginfunc when clicked', () => {
    spyOn(component, 'Loginfunc').and.returnValue();



    })

});
