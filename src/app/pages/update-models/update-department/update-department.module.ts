import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDepartmentRoutingModule } from './update-department-routing.module';
import { UpdateDepartmentComponent } from './update-department.component';


@NgModule({
    imports: [
      CommonModule,
      UpdateDepartmentRoutingModule,
    ],

    declarations:  [UpdateDepartmentComponent]
    
 
  })
  export class UpdateDepartmentModule { }