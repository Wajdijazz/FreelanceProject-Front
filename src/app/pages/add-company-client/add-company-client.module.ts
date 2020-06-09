import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyClientComponent } from './add-company-client.component';
import { AddCompanyClientRoutingModule } from './add-company-client-routing.module';



@NgModule({
    imports: [
      CommonModule,
      AddCompanyClientRoutingModule,
    ],

    declarations:  [AddCompanyClientComponent],
 
  })
  export class AddCompanyClientModule { }