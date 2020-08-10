import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalisationRoutingModule } from './localisation-routing.module';
import { LocalisationComponent } from './localisation.component';


@NgModule({
    imports: [
      CommonModule,
      LocalisationRoutingModule,
    ],

    declarations:  [LocalisationComponent]
 
  })
  export class LocalisationModule { }