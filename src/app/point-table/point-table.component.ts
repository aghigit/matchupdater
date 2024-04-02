import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit{
 
  allpointsTable:any= []

  constructor(private api:ApiService, private toaster:ToastrService){}

  ngOnInit(): void { 
    this.getallPoints()
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

  deletepoint(id:any){ 
    this.api.deletepointAPI(id).subscribe(
      (res:any)=>{
        this.toaster.error("points deleted successfully",'',{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})         
        this.getallPoints() 
      }  
    ) 
  }
} 
