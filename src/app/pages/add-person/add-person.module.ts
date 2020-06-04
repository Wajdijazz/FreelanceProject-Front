import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonComponent } from './add-person.component';
import { AddPersonRoutingModule } from './add-person-routing.module';

@NgModule({
    imports: [
      CommonModule,
      AddPersonRoutingModule,
    ],

    declarations:  [AddPersonComponent]
 
  })
  export class AddPersonModule { }