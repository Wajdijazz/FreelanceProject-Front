import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';


@NgModule({
    imports: [
      CommonModule,
      PersonRoutingModule,
    ],

    declarations:  [PersonComponent]
 
  })
  export class PersonModule { }