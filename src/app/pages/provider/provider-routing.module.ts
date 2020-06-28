import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
    data: {
      breadcrumb: 'provider',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of providers',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }