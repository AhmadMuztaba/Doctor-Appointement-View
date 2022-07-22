import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  numberOfDays:Number[]=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let month = params['id'];
      let startDay=this.getDay(2022,month);
      this.numberOfDays=Array(startDay-1).fill(0);
      let daysInMonth=this.getDaysInMonth(2022,month);
      for(let i=1;i<=daysInMonth;i++){
        this.numberOfDays.push(i);
      }
  });
  }
  getDaysInMonth(year:any, month:any) {
    return new Date(year, month, 0).getDate();
  }
  getDay(year:any,month:any){
    return new Date(year + "-" + month + "-01").getDay();
  }
  

}
