import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-updatepress',
  templateUrl: './updatepress.component.html',
  styleUrls: ['./updatepress.component.css']
})
export class UpdatepressComponent implements OnInit{

  pressReleases:any={}

  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router,
    private toaster:ToastrService,public loaderService:LoaderService){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      console.log(res); 
      const {id} = res 
      this.getsinglePress(id)
    })
  }

  getsinglePress(id:string){
    this.api.getsinglepressAPI(id).subscribe((res:any)=>{
      this.pressReleases = res
    })
  }

  updatesinglePress(id:any){
    this.api.updatepressreleaseAPI(id,this.pressReleases).subscribe({
      next:(res:any)=>{
        this.toaster.success("updated successfully",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
      },
      error:(reason:any)=>{
        console.log(reason.error);
      }
    })
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }


}

