import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepress',
  templateUrl: './updatepress.component.html',
  styleUrls: ['./updatepress.component.css']
})
export class UpdatepressComponent implements OnInit{

  pressReleases:any={}

  constructor(private api:ApiService, private route:ActivatedRoute,private router:Router){}

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
        alert("updated successfully")
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

