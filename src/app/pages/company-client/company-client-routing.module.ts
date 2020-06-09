import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyClientComponent } from './company-client.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyClientComponent,
    data: {
      breadcrumb: 'Campanies Clients',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of clients',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyClientRoutingModule { }