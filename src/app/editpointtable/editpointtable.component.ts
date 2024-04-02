import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editpointtable',
  templateUrl: './editpointtable.component.html',
  styleUrls: ['./editpointtable.component.css']
})
export class EditpointtableComponent implements OnInit{

  singlePoint:any= {}

  constructor(private route:ActivatedRoute,private api:ApiService, private router:Router,private toaster:ToastrService){}


  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const {id} = res 
      this.getsinglepointDetails(id) 
    })
  }
 
  getsinglepointDetails(pointId:string){
    this.api.getsinglepointAPI(pointId).subscribe((res:any)=>{
      this.singlePoint = res  
    })    
  }
    
 
  updatesinglePoint(id:any){
    this.api.updatesinglepointAPI(id,this.singlePoint).subscribe({
      next:(res:any)=>{
        this.toaster.success("points and details updated succefully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
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
 