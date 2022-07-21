import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';


const routes: Routes = [{
  path:'',
  component:AppointmentsComponent,
  children:[
    {
      path:'month/:id',
      loadChildren:()=>
        import('./calender/calender.module').then((m)=>m.CalenderModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
