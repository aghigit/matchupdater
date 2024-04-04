import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent { 

  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  constructor(private fb:FormBuilder, private api:ApiService , private router:Router,
     private toaster:ToastrService, private spinner:NgxSpinnerService
     ,public loaderService:LoaderService){}

  register(){

    if(this.registerForm.valid){
      const username = this.registerForm.value.username
    const email = this.registerForm.value.email
    const password = this.registerForm.value.password
    const admin = {username,email,password} 

    this.api.registerAPI(admin).subscribe({
      next:(res:any)=>{
        // this.toaster.success(`${res.username} has successfully registered`,"",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
        this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);    

        this.registerForm.reset()
        this.router.navigateByUrl('/login')

      }, 
      error:(reason:any)=>{
        this.toaster.error(reason.error,'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      }
    })
    }else{
      this.toaster.info('invalid form',"",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
    }
  }
}
