import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-editlive',
  templateUrl: './editlive.component.html',
  styleUrls: ['./editlive.component.css']
})
export class EditliveComponent implements OnInit{

  liveDetails:any={}

  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router,
     private toaster:ToastrService,public loaderService:LoaderService){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const {id} = res
      this.getsingleLive(id)      
    })
  }

  getsingleLive(id:string){
    this.api.getsingleliveAPI(id).subscribe((res:any)=>{
      this.liveDetails = res
    })
  }

  updateLive(id:any){
    this.api.updateliveAPI(id,this.liveDetails).subscribe({
      next:(res:any)=>{
        this.toaster.success("live updated successfully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      },
      error:(reason:any)=>{
        alert(reason)
      }
    })
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }

}
