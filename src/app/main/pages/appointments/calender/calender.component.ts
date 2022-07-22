import { ChangeDetectionStrategy, Component, Input, OnInit,OnChanges, SimpleChange } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/Models/appointment';
import { AppointmentCreateEditComponent } from '../appointment-create-edit/appointment-create-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class CalenderComponent implements OnInit {
  @Input() data:any;
  days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  numberOfDaysData:any[]=[];
  allData:Appointment[]=[];
  filterData:Appointment[]=[];
  year:Number=2022;
  constructor(private route: ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.render();
  }
  ngOnChanges(changes:any) {
    if(changes.data)
    {
       this.render()
    }
 
  }
  render(){
    this.route.queryParams.subscribe(params=>{
      if(params['year']){
        if(parseInt(params['year'])>2021 && parseInt(params['year'])<3000){
          this.year=parseInt(params['year']);
        }
        if(parseInt(params['year'])<2021 || parseInt(params['year'])>3000){
          Swal.fire({
            icon: 'error',
            title: `${params['year']} can not be converted into year`,
            text: 'Will show 2022 for now',
           
          })
        }
        
      }
    })
    this.route.params.subscribe(params => {
      let month = params['id'];
      if(month){
        let startDay=this.getDay(this.year,month);
        if(startDay){
          this.numberOfDaysData=Array(startDay-1).fill({day:0,data:[]});
        let daysInMonth=this.getDaysInMonth(this.year,month);
       
      this.allData=this.data;
        this.filterData=this.allData.filter((appoint:Appointment)=>{
          return (new Date(appoint.date).getMonth()+1)==month;
        })
        for(let i=1;i<=daysInMonth;i++){
         
          let daysData=this.filterData.filter((appointment:Appointment)=>{
            return new Date(appointment.date).getDate()==i;
          })
          daysData.sort((a,b)=>a.time.localeCompare(b.time));
          this.numberOfDaysData.push({
            day:i,
            data:daysData
          })
        }
       
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
  saveData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  open(data:Appointment){
    let newData={
      ...data,
      mode:'read'
    }
    this.dialog.open(AppointmentCreateEditComponent,{
      data:newData,
    }).afterClosed().subscribe((data:Appointment)=>{
      if(data){
        let index=this.allData.findIndex((appointment)=>appointment.id==data.id);
        if(index!=-1){
          this.allData[index]=data;
        }
        this.saveData('appointment',this.allData);
        Swal.fire(
          'updated',
          '',
          'success'
        )
        this.render();
      }
    })
  }
  

}
