import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemFamilyComponent } from './update-item-family.component';

describe('UpdateItemFamilyComponent', () => {
  let component: UpdateItemFamilyComponent;
  let fixture: ComponentFixture<UpdateItemFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
