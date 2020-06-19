import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDepartmentComponent } from './update-department.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDepartmentComponent,
    data: {
      breadcrumb: 'Upadate department',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Upadate department',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDepartmentRoutingModule { }