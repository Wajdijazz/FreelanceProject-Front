import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BasicLoginModule } from './pages/auth/login/basic-login/basic-login.module';
import { httpInterceptorProviders } from './pages/auth/auth-interceptor';
import { CompanyClientService } from './services/company-client.service';
import { AuthService } from './pages/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCompanyClientComponent } from './pages/add-models/add-company-client/add-company-client.component';
import { UpdateCompanyClientComponent } from './pages/update-models/update-company-client/update-company-client.component';
import { BasicRegComponent } from './pages/auth/registration/basic-reg/basic-reg.component';
import { UpdatePasswordComponent } from './pages/update-models/update-password/update-password.component';
import { LoginSuperadminComponent } from './pages/login-superadmin/login-superadmin.component';
import {FileUploadModule} from 'ng2-file-upload';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AddDepartmentComponent } from './pages/add-models/add-department/add-department.component';
import { UpdateDepartmentComponent } from './pages/update-models/update-department/update-department.component';
import { AddPersonComponent } from './pages/add-models/add-person/add-person.component';
import { UpdatePersonComponent } from './pages/update-models/update-person/update-person.component';
import { AddProviderComponent } from './pages/add-models/add-provider/add-provider.component';
import { UpdateProviderComponent } from './pages/update-models/update-provider/update-provider.component';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    AddCompanyClientComponent,
    UpdateCompanyClientComponent,
    BasicRegComponent,
    UpdatePasswordComponent,
    LoginSuperadminComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    AddProviderComponent,
    UpdateProviderComponent,

 
 
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
    BasicLoginModule,
    FormsModule,                            
    ReactiveFormsModule,  
    FileUploadModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CompanyClientService,AuthService,httpInterceptorProviders,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCompanyClientComponent, 
    UpdateCompanyClientComponent,
    BasicRegComponent,
    LoginSuperadminComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    AddProviderComponent,
    UpdateProviderComponent],

  
})
export class AppModule { }
