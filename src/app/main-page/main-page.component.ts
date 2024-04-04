import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  allImages:any = []

  allpointsTable:any= []

  livescores:any = []

  allpressReleases:any=[]


  constructor(private api:ApiService, private route:ActivatedRoute, private spinner:NgxSpinnerService
    , public loaderService:LoaderService){}

  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

      this.getlive()        
    this.getallPoints()
    this.getimages()
   this.getpressReleases()
  }

  getlive(){  
    this.api.getliveAPI().subscribe({
      next:(res:any)=>{
        this.livescores = res
      },
      error:(reason:any)=>{
        console.log(reason.error);
      }
    })
  }

  getallPoints(){
    this.api.getpointsAPI().subscribe({
      next:(res:any)=>{
        this.allpointsTable = res
      },
      error:(reason:any)=>{
        console.log(reason);
      }
    })
  } 

  getimages(){
    this.api.getimageAPI().subscribe({
      next:(res:any)=>{
        this.allImages = res
        console.log(this.allImages);
        
      },
      error:(reason:any)=>{
        console.log(reason);
      } 
    })    
  }

  getpressReleases(){
    this.api.getpressreleaseAPI().subscribe({
      next:(res:any)=>{
        this.allpressReleases = res
        console.log(this.allpressReleases);
        
      },
      error:(reason:any)=>{
        alert(reason)
      }
    })
  }


}
