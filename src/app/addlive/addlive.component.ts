import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addlive',
  templateUrl: './addlive.component.html',
  styleUrls: ['./addlive.component.css']
})
export class AddliveComponent {

  addlive = this.fb.group({
    clubname1:['',[Validators.required]],
    score1:[''],
    clubname2:['',[Validators.required]], 
    score2:[''],
    stadium:['',[Validators.required]],
    discription:['']
  })

  constructor(private api:ApiService, private fb:FormBuilder, private router:Router, private toaster:ToastrService){}

  addDeatils(){
    if(this.addlive.valid && this.addlive.value.clubname1!=this.addlive.value.clubname2){
      const clubname1 = this.addlive.value.clubname1
      const score1 = this.addlive.value.score1
      const clubname2 = this.addlive.value.clubname2
      const score2 = this.addlive.value.score2
      const stadium = this.addlive.value.stadium
      const discription = this.addlive.value.discription
      const allLive = {clubname1,score1,clubname2,score2,stadium,discription}
      this.api.addliveAPI(allLive).subscribe({
        next:(res:any)=>{
          this.toaster.success("LIVE added successfully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
          this.addlive.reset()
          this.router.navigateByUrl('/dashboard')
        },
        error:(reason:any)=>{
          alert(reason)
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
