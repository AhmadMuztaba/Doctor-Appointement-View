import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    SharedModule
  ],
  exports:[CalenderComponent]
})
export class CalenderModule { }
