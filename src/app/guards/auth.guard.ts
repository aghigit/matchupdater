import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
 const authstatus =  inject(ApiService)
 const toaster = inject(ToastrService)
 const router = inject(Router) 
 if(authstatus.isLoggedin()){
  return true;
 }else{
  toaster.error("Operation Denied... Please LOGIN",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
  router.navigateByUrl('/login')
  return false;
 }
};
