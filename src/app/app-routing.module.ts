import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import { UpdatePasswordComponent } from './pages/update-models/update-password/update-password.component';
import {  RoleGuardService as RoleGuard   } from './pages/auth/role-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'reset/:token' ,  
    component: UpdatePasswordComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
     {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      },{
      path: 'add-person',
      loadChildren: () => import('./pages/add-models/add-person/add-person.module').then(m => m.AddPersonModule),
    },{
      path: 'company-client', canActivate: [RoleGuard], data: {expectedRole: 'SUPERADMIN'},
      loadChildren: () => import('./pages/company-client/company-client.module').then(m => m.CompanyClientModule),
     },{
      path: 'add-company-client',
      loadChildren: () => import('./pages/add-models/add-company-client/add-company-client.module').then(m => m.AddCompanyClientModule),
     },{
      path: 'update-company-client',
      loadChildren: () => import('./pages/update-models/update-company-client/update-company-client.module').then(m => m.UpdateCompanyClientModule),
     },
     {
      path: 'employees/department', canActivate: [RoleGuard], data: {expectedRole: 'GESTIONARY'},
      loadChildren: () => import('./pages/employees/department/department.module').then(m => m.DepartmentModule),
     },
     {
      path: 'employees/person', canActivate: [RoleGuard], data: {expectedRole: 'GESTIONARY'},
      loadChildren: () => import('./pages/employees/person/person.module').then(m => m.PersonModule),
     },
     {
      path: 'registration',
      loadChildren: () => import('./pages/auth/registration/basic-reg/basic-reg.module').then(m => m.BasicRegModule),
     },
       {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user', canActivate: [RoleGuard], data: {expectedRole: 'SUPERADMIN'},
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
