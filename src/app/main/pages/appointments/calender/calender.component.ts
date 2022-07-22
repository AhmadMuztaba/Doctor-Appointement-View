import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/Models/appointment';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  numberOfDays:Number[]=[];
  allData:Appointment[]=[];
  filterData:Appointment[]=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let month = params['id'];
      if(month){
        let startDay=this.getDay(2022,month);
        if(startDay){
          this.numberOfDays=Array(startDay-1).fill(0);
        let daysInMonth=this.getDaysInMonth(2022,month);
        for(let i=1;i<=daysInMonth;i++){
        this.numberOfDays.push(i);
      }
      this.allData=this.getData('appointment');
        this.filterData=this.allData.filter((appoint:Appointment)=>{
          return (new Date(appoint.date).getMonth())==month;
        })
        console.log(this.filterData);
        }
        
      }
      
  });
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
  getDaysInMonth(year:any, month:any) {
    return new Date(year, month, 0).getDate();
  }
  getDay(year:any,month:any){
    return new Date(year + "-" + month + "-01").getDay();
  }
  

}
