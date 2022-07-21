import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  getDaysInMonth(year:any, month:any) {
    return new Date(year, month, 0).getDate();
  }
  getDay(year:any,month:any){
    return new Date(year + "-" + month + "-01").getDay();
  }
  

}
