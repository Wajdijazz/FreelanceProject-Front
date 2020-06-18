import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuperadminComponent } from './login-superadmin.component';

describe('LoginSuperadminComponent', () => {
  let component: LoginSuperadminComponent;
  let fixture: ComponentFixture<LoginSuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
