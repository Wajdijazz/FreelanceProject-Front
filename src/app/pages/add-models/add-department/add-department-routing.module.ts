import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add-department.component';

const routes: Routes = [
  {
    path: '',
    component: AddDepartmentComponent,
    data: {
      breadcrumb: 'Add department',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Add department',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDepartmentRoutingModule { }