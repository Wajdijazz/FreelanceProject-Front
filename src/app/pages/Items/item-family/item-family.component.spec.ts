import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFamilyComponent } from './item-family.component';

describe('ItemFamilyComponent', () => {
  let component: ItemFamilyComponent;
  let fixture: ComponentFixture<ItemFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
