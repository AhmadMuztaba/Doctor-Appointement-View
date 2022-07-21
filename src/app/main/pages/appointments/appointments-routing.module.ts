import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';


const routes: Routes = [{
  path:'',
  component:AppointmentsComponent,
},{
  path:'month/:id',
  component:AppointmentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
