import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalisationComponent } from './localisation.component';

const routes: Routes = [
  {
    path: '',
    component: LocalisationComponent,
    data: {
      breadcrumb: 'localisation',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of localisation',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalisationRoutingModule { }