import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemFamilyComponent } from './item-family.component';

const routes: Routes = [
  {
    path: '',
    component: ItemFamilyComponent,
    data: {
      breadcrumb: 'Item Family',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'List of item family',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemFamilyRoutingModule { }