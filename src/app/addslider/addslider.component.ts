import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addslider',
  templateUrl: './addslider.component.html',
  styleUrls: ['./addslider.component.css']
})
export class AddsliderComponent {

  uploadingFile:any = '' 
  // addImageStatus:boolean = false

  mainImage:string='assets/image/football-4254951_1280.png'

  constructor(private api:ApiService, private toaster:ToastrService){}


   getMainimg(event:any){
    this.uploadingFile = event.target.files[0] 

    let file = event.target.files[0] 
    let fr = new FileReader()
    fr.readAsDataURL(file) 
    fr.onload = (event:any)=>{
      // console.log(event.target.result);
      this.mainImage = event.target.result      
    }
  }

  // addImagepage(){
  //   this.addImageStatus= true     
  // }



  uploadImage(){
   
    const formData = new FormData();
formData.append('mainimage',  this.uploadingFile);
    
    this.api.mainimageuploadAPI(formData).subscribe({
      next:(res:any)=>{
        this.toaster.success("image uploaded successfully","",{timeOut: 2000, positionClass: 'toast-top-center',progressBar: true})
        // window.location.reload()
      },
      error:(reason:any)=>{
        alert(reason)
        console.log(reason.error);
      }
    })
  }
  
}
