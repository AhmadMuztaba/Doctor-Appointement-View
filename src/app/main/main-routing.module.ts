import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';

const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[
    {
      path:'',
      loadChildren:()=>
        import('./pages/appointments/appointments.module').then((m)=>m.AppointmentsModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
