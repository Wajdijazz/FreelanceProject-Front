import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFamilyComponent } from './add-item-family.component';

describe('AddItemFamilyComponent', () => {
  let component: AddItemFamilyComponent;
  let fixture: ComponentFixture<AddItemFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
