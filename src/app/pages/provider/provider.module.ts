import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';


@NgModule({
    imports: [
      CommonModule,
      ProviderRoutingModule,
    ],

    declarations:  [ProviderComponent]
 
  })
  export class ProviderModule { }