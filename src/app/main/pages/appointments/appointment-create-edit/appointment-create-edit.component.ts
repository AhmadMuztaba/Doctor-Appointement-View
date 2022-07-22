import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-appointment-create-edit',
  templateUrl: './appointment-create-edit.component.html',
  styleUrls: ['./appointment-create-edit.component.scss']
})
export class AppointmentCreateEditComponent implements OnInit {
  mode: "create" | "update" = "create";
  form:any;
  today:string='';
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
  private dialogRef: MatDialogRef<AppointmentCreateEditComponent>,) { }

  ngOnInit(): void {
    this.today=new Date().toISOString().slice(0, 10);;
    if (this.defaults) {
      console.log(this.defaults);
      this.mode = "update";
      //this.countrySelected(this.defaults.country);'
    } else {
      this.defaults = {};
    }
    this.form=new FormGroup({
      id:new FormControl(this.defaults?.id||''),
      firstName:new FormControl(this.defaults?.firstName||'',[Validators.required,Validators.maxLength(40)]),
      lastName:new FormControl(this.defaults?.lastName||'',[Validators.required,Validators.maxLength(40)]),
      email:new FormControl(this.defaults?.email||'',[Validators.required,Validators.email]),
      gender:new FormControl(this.defaults?.gender||'',[Validators.required]),
      age:new FormControl(this.defaults?.age||''),
      date:new FormControl(this.defaults?.date||'',[Validators.required]),
      time:new FormControl(this.defaults?.time||'',[Validators.required]),
    })
  }
  isCreateMode() {
    return this.mode === "create";
  }

  isUpdateMode() {
    return this.mode === "update";
  }
  save() {
    if (this.mode === "create") {
      this.createAppointment();
    } else if (this.mode === "update") {
      this.updateAppointment();
    }
  }
  createAppointment(){
    if(this.form.valid){
      let value=this.form.value;
      this.dialogRef.close(value);
    }
  }
  updateAppointment(){
    if(this.form.valid){
      let value=this.form.value;
      this.dialogRef.close(value);
    }
  }
}
