import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFamilyRoutingModule } from './item-family-routing.module';
import { ItemFamilyComponent } from './item-family.component';



@NgModule({
    imports: [
      CommonModule,
      ItemFamilyRoutingModule,
    ],

    declarations:  [ItemFamilyComponent]
 
  })
  export class ItemFamilyModule { }