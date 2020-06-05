import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLoginComponent} from './basic-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: BasicLoginComponent,
    data: {
      title: 'Simple Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicLoginRoutingModule { }
