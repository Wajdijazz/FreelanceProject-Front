import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyClientComponent } from './add-company-client.component';

describe('AddCompanyClientComponent', () => {
  let component: AddCompanyClientComponent;
  let fixture: ComponentFixture<AddCompanyClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
