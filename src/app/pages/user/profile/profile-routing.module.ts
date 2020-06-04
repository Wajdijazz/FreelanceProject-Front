import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      breadcrumb: 'About Us',
      icon: 'icofont-justify-all bg-c-green',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
