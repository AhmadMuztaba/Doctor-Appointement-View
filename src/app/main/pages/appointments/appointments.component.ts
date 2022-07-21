import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  form:any;
  months:customMonth[]=[{
    value:0,
    name:'January',
  },{
    value:1,
    name:'February'
  },{
    value:2,
    name:'March'
  },{
    value:3,
    name:'April',
  },{
    value:4,
    name:'May',
  },{
    value:5,
    name:'June',
  },{
    value:6,
    name:'July',
  },{
    value:7,
    name:'August',
  },{
    value:8,
    name:'Septempber'
  },{
    value:9,
    name:'October'
  },{
    value:10,
    name:'November'
  },{
    value:11,
    name:'December'
  }];
  constructor(private router:Router,private route: ActivatedRoute) {
       
  }
  ngOnInit(): void {
    let today;
    let id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      today=id;
    }else{
      today=new Date().getMonth();
    }
    this.router.navigate([`/month/${today}`])
    this.form=new FormGroup({
        month:new FormControl(today?today:''),
    })
  }

}
export interface customMonth{
  value:number,
  name:string,
}
