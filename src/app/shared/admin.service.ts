import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token: string  
  private adminId : string
  private authStatusListener = new Subject<boolean>()
  isAuthenticated=false
  constructor(private http : HttpClient ,  private router : Router , private route : ActivatedRoute) { }
  login(admin : any){
    this.http.post<{token : string , adminId : string }>('http://localhost:3000/login',admin)
    .subscribe(res=>{
      this.token = res.token ;
      this.adminId = res.adminId ;
      this.isAuthenticated = true ;
      this.authStatusListener.next(true)
      this.saveAuthData(this.token,this.adminId)
      if(this.token){
        this.router.navigate(['admin'] )
      }
    })
  }
  private saveAuthData(token, adminId){
    localStorage.setItem("tokenAdmin" ,token )
    localStorage.setItem("AdminId",adminId)
  }
  getisAuth(){
    return this.isAuthenticated
  }
  getauthStatusListener(){
    return this.authStatusListener.asObservable()
  }
  autoAuthUser(){
    const authInformation = this.getAuthData()
    if(authInformation){
      this.token = this.getAuthData().token
      this.adminId = this.getAuthData().userId
      this.isAuthenticated = true
      this.authStatusListener.next(true)
    }
  }
  private getAuthData(){
    const token = localStorage.getItem("tokenAdmin")
    const userId = localStorage.getItem("AdminId")
    if(!token){
      return undefined;
    }
    return {
      token : token ,
      userId : userId
    }
  }
  logOut(){
    this.token = null ;
    this.adminId = null
    this.isAuthenticated = false ;
    this.authStatusListener.next(false);
    this.clearAuthData()
    this.router.navigate(['/admin/login'])
  }
  private clearAuthData(){
    localStorage.removeItem("tokenAdmin")
    localStorage.removeItem("AdminId")
  }
  getId(){
    return this.adminId
  }
  getAdmin(){
    return this.http.get('http://localhost:3000/getAdmin')
  }
  updateProfile(data){
    return this.http.post('http://localhost:3000/updateAdminProfile',data)
  }
}
