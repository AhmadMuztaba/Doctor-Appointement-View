import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalenderComponent } from './calender/calender.component';
import { CalenderModule } from './calender/calender.module';
import { AppointmentCreateEditComponent } from './appointment-create-edit/appointment-create-edit.component';
@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentCreateEditComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule,
    CalenderModule
  ]
})
export class AppointmentsModule { }
