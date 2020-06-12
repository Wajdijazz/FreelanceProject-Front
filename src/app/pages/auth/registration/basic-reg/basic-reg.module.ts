import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicRegRoutingModule} from './basic-reg-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { BasicRegComponent } from './basic-reg.component';

@NgModule({
  imports: [
    CommonModule,
    BasicRegRoutingModule,
    SharedModule
  ],
  declarations: [BasicRegComponent]
})
export class BasicRegModule { }
