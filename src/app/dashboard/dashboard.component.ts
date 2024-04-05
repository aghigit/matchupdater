import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  livescores:any = []

  higlightImages:any = []

  allpressReleases:any=[]

  adminname:string=''

  constructor(private api:ApiService, private toaster:ToastrService, private router:Router){}

  ngOnInit(): void {
    this.getlive()
    this.getimages()
    this.getpressReleases()

        if(sessionStorage.getItem("existingUser")){
      this.adminname = JSON.parse(sessionStorage.getItem("existingUser") || "").username
    }
  }


  getlive(){ 
    this.api.getliveAPI().subscribe({ 
      next:(res:any)=>{
        this.livescores = res 
      },
      error:(reason:any)=>{
        alert(reason.error)
      }
    })
  }

  deletelive(id:any){
    this.api.deleteliveAPI(id).subscribe((res:any)=>{
      this.toaster.error("live deleted",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      this.getlive()
    })
  }

  getimages(){
    this.api.getimageAPI().subscribe({
      next:(res:any)=>{
        this.higlightImages = res
        console.log(this.higlightImages);
        
      },
      error:(reason:any)=>{
        console.log(reason);
      }
    })    
  }

  deleteImage(id:any){
    this.api.deleteimageAPI(id).subscribe((res:any)=>{
      this.toaster.error("image deleted successfully",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      this.getimages()
    })
  }

  getpressReleases(){
    this.api.getpressreleaseAPI().subscribe({
      next:(res:any)=>{
        this.allpressReleases = res
      },
      error:(reason:any)=>{
        alert(reason)
      }
    })
  }

  deletePressRelease(id:any){ 
    this.api.deletepressreleaseAPI(id).subscribe((res:any)=>{
      this.toaster.error("Press release deleted succefully",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      this.getpressReleases()
    })
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }
}
