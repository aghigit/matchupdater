import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addpointstable',
  templateUrl: './addpointstable.component.html',
  styleUrls: ['./addpointstable.component.css']
})
export class AddpointstableComponent { 
 
  addpoints = this.fb.group({
    clubname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    won:['',[Validators.pattern('[0-9]*')]],
    tie:['',[Validators.pattern('[0-9]*')]],
    loss:['',[Validators.pattern('[0-9]*')]],
    point:['',[Validators.required,Validators.pattern('[0-9]*')]]   
  })
  constructor(private fb:FormBuilder, private api:ApiService, private router:Router, private toaster:ToastrService){}

  postPoints(){
    if(this.addpoints.valid){ 
      const clubname = this.addpoints.value.clubname 
      const won = this.addpoints.value.won
      const tie = this.addpoints.value.tie
      const loss = this.addpoints.value.loss
      const point = this.addpoints.value.point
      const points = {clubname,won,tie,loss,point} 
      this.api.addpointsAPI(points).subscribe({
        next:(res:any)=>{ 
          console.log(points);
          this.toaster.success("Club details added successfully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
          this.addpoints.reset()
          this.router.navigateByUrl('/dashboard')
        },
        error:(reason:any)=>{
          alert(reason.error)
          console.log(reason.error);
        }
      })
      
    }else{
      this.toaster.error("invalid form","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
    }
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }

}
