import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    data: {
      breadcrumb: 'department',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of departments',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }