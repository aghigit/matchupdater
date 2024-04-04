import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-addpress',
  templateUrl: './addpress.component.html',
  styleUrls: ['./addpress.component.css']
})
export class AddpressComponent {

  addPress = this.fb.group({
    pressHeading:['',[Validators.required]],
    pressDiscription:['']
  })

  constructor(private api:ApiService, private fb:FormBuilder, private router:Router, 
    private toaster:ToastrService,public loaderService:LoaderService){}

  postPress(){
    if(this.addPress.valid){
      const pressHeading = this.addPress.value.pressHeading
      const pressDiscription = this.addPress.value.pressDiscription
      const newses = {pressHeading,pressDiscription}
      this.api.addpressreleaseAPI(newses).subscribe({
        next:(res:any)=>{
          this.toaster.success("press release added successfully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
          this.addPress.reset()
          this.router.navigateByUrl('/dashboard')
        },
        error:(reason:any)=>{
          alert(reason.error)
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
