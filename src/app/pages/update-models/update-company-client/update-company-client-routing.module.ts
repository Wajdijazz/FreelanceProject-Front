import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCompanyClientComponent } from './update-company-client.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateCompanyClientComponent,
    data: {
      breadcrumb: 'Upadate Companies Clients',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Upadate Companies Clients',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCompanyClientRoutingModule { }