import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "https://footballupdater.onrender.com"
  constructor(private http:HttpClient) { }

  getsampleMatchAPI(){
   return this.http.get(`${this.SERVER_URL}/matches`)
  }

  // register API 
  registerAPI(admin:any){
    return this.http.post(`${this.SERVER_URL}/register`,admin)
  }

  // login
  loginAPI(admin:any){
    return this.http.post(`${this.SERVER_URL}/login`,admin)
  } 

  // mainimageUpload
  mainimageuploadAPI(reqBody:any){

    return this.http.post(`${this.SERVER_URL}/add-mainimage`,reqBody)
  }
  
  // get image
  getimageAPI(){
    return this.http.get(`${this.SERVER_URL}/get-mainimage`)
  }

  // delete image
  deleteimageAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/delete-image/${id}`)
  }

  // add points table
  addpointsAPI(points:any){
    return this.http.post(`${this.SERVER_URL}/addpoints-table`,points)
  }

    // get points table
    getpointsAPI(){
      return this.http.get(`${this.SERVER_URL}/addpoints-table`)
    }
  
    // get single points 
    getsinglepointAPI(id:string){
      return this.http.get(`${this.SERVER_URL}/editpoints-table/${id}`)
    }

    // update single point
    updatesinglepointAPI(id:string,reqBody:any){
      return this.http.put(`${this.SERVER_URL}/updatepoint-table/${id}`,reqBody)
    }  

    // delete point
    deletepointAPI(id:string){
      return this.http.delete(`${this.SERVER_URL}/deletepoint-table/${id}`)
    }


 
    // addlive
  addliveAPI(allLive:any){
    return this.http.post(`${this.SERVER_URL}/add-live`,allLive)
  }

  // get live
  getliveAPI(){
    return this.http.get(`${this.SERVER_URL}/get-live`)
  }

  // det single live
  getsingleliveAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/getsingle-live/${id}`)
  }

  // delete live
  deleteliveAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/delete-live/${id}`)
  }

  // update live
  updateliveAPI(id:string,reqBody:any){
    return this.http.put(`${this.SERVER_URL}/update-live/${id}`,reqBody) 
  }


  // add press release
  addpressreleaseAPI(pressrelease:any){
    return this.http.post(`${this.SERVER_URL}/add-press`,pressrelease)
  }

  // get press api
  getpressreleaseAPI(){
    return this.http.get(`${this.SERVER_URL}/get-press`)
  }

  // get single press
  getsinglepressAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/getsingle-press/${id}`)
  }

  // delete press 
  deletepressreleaseAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/delete-press/${id}`)
  }

  // update press
  updatepressreleaseAPI(id:string,reqBody:any){
    return this.http.put(`${this.SERVER_URL}/update-press/${id}`,reqBody)
  }  

  isLoggedin(){
   return !!sessionStorage.getItem("existingUser")
  }

}
