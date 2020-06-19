import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department.component';
import { AddDepartmentRoutingModule } from './add-department-routing.module';



@NgModule({
    imports: [
      CommonModule,
      AddDepartmentRoutingModule,
  
    ],

    declarations:  [AddDepartmentComponent],
 
  })
  export class AddDepartmentModule { }