import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonRoutingModule } from './add-person-routing.module';
import { AddPersonComponent } from './add-person.component';

@NgModule({
    imports: [
      CommonModule,
      AddPersonRoutingModule,
    ],

    declarations:  [AddPersonComponent]
 
  })
  export class AddPersonModule { }