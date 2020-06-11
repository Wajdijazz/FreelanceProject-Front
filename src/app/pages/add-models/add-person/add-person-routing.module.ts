import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person.component';

const routes: Routes = [
  {
    path: '',
    component: AddPersonComponent,
    data: {
      breadcrumb: 'add-person',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of persons',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPersonRoutingModule { }