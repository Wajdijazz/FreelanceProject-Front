import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyClientComponent } from './company-client.component';
import { CompanyClientRoutingModule } from './company-client-routing.module';


@NgModule({
    imports: [
      CommonModule,
      CompanyClientRoutingModule,
    ],

    declarations:  [CompanyClientComponent]
    
 
  })
  export class CompanyClientModule { }