import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from "@angular/material/dialog";
import { AppointmentCreateEditComponent } from './appointment-create-edit/appointment-create-edit.component';
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from 'src/app/Models/appointment';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  today=new Date().getMonth()+1;
  months:customMonth[]=[{
    value:1,
    name:'January',
  },{
    value:2,
    name:'February'
  },{
    value:3,
    name:'March'
  },{
    value:4,
    name:'April',
  },{
    value:5,
    name:'May',
  },{
    value:6,
    name:'June',
  },{
    value:7,
    name:'July',
  },{
    value:8,
    name:'August',
  },{
    value:9,
    name:'Septempber'
  },{
    value:10,
    name:'October'
  },{
    value:11,
    name:'November'
  },{
    value:12,
    name:'December'
  }];
  constructor(private router:Router,private route: ActivatedRoute,private dialog:MatDialog) {
       
  }
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    if(id){
      if(isNaN(parseInt(id))){
        Swal.fire({
          icon: 'error',
          title: 'Try add number from 1-9 in the url after month',
          text: 'Will show the current month for now',
         
        })
      }
      if(!isNaN(parseInt(id))){
        this.today=parseInt(id);
      }
      
    }
    if(!id){
      this.router.navigate([`/month/${this.today}`])
    }
    
  }
  changeMonth(month:number){
    this.router.navigate([`/month/${month}`])
  }
  saveData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  getData(key:string):any{
    let data=localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    else{
      return [];
    }
   }
  create(){
    this.dialog.open(AppointmentCreateEditComponent,{autoFocus:false}).afterClosed().subscribe((data:Appointment)=>{
      if(data){
        data.id=uuidv4();
        let savedData=this.getData('appointment');
        savedData.push(data);
        this.saveData('appointment',savedData);
        Swal.fire(
          'Created',
          '',
          'success'
        )
        
      }
    })
  }

}
export interface customMonth{
  value:number,
  name:string,
}
