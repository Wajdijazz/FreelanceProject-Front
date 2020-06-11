import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyClientComponent } from './add-company-client.component';

const routes: Routes = [
  {
    path: '',
    component: AddCompanyClientComponent,
    data: {
      breadcrumb: 'Add Campanies Clients',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Add company client',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCompanyClientRoutingModule { }