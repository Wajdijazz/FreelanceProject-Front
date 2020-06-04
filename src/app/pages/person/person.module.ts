import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { BasicRegComponent } from '../auth/registration/basic-reg/basic-reg.component';
import { AddPersonComponent } from '../add-person/add-person.component';

@NgModule({
    imports: [
      CommonModule,
      PersonRoutingModule,
    ],
    declarations:  [PersonComponent]
 
  })
  export class PersonModule { }