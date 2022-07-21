import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router:Router,private route: ActivatedRoute) {
       
  }
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.today=parseInt(id);
    }
    if(!id){
      this.router.navigate([`/month/${this.today}`])
    }
    
  }
  changeMonth(month:number){
    this.router.navigate([`/month/${month}`])
  }

}
export interface customMonth{
  value:number,
  name:string,
}
