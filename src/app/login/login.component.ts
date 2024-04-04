import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder, private toaster:ToastrService, private api:ApiService, private router:Router
    ,public loaderService:LoaderService){}


  login(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password  
      const admin = {email,password}
      this.api.loginAPI(admin).subscribe({
        next:(res:any)=>{
          this.toaster.success(`${res.existingUser.username}Logged Successfull`,"",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
          sessionStorage.setItem('existingUser',JSON.stringify(res.existingUser))
          sessionStorage.setItem('token',res.token)
          this.loginForm.reset()
          this.router.navigateByUrl('/dashboard')
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
