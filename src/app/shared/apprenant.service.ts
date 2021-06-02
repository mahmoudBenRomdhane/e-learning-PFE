import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  private userId : string
  private token: string  
  private authStatusListener = new Subject<boolean>()
  isAuthenticated=false
  constructor(private http : HttpClient , private router : Router) { }
  getToken(){
    return this.token
  }
  getauthStatusListener(){
    return this.authStatusListener.asObservable()
  }
  getIsAuth() {
    return this.isAuthenticated;
  }
  getId(){
    return this.userId
  }
  addApprenant(data:any){
    return this.http.post('http://localhost:3000/addapprenant',data)
  }
  getEmails(){
    return this.http.get('http://localhost:3000/getEmails')
  }
  getApprenant(_id:string){
    return this.http.get('http://localhost:3000/getApprenant/'+_id)
  }
  login(user : any){
    this.http.post<{token : string , userId : string}>('http://localhost:3000/connectUser',user)
    .subscribe(res=>{
      //console.log(res.token) 
      this.token = res.token
      this.userId = res.userId
      this.isAuthenticated = true;
      this.authStatusListener.next(true)
      this.saveAuthData(this.token,this.userId)
      console.log('t3ada')
      this.router.navigate(['/'])
      //console.log(this.token)
    })
    
    return true
  }
  logOut(){
    this.token = null ;
    this.userId = null
    this.isAuthenticated = false ;
    this.authStatusListener.next(false);
    this.clearAuthData()
    this.router.navigate(['/login'])
  }
  autoAuthUser(){
    const authInformation = this.getAuthData()
    if(authInformation){
      this.token = this.getAuthData().token
      this.userId = this.getAuthData().userId
      this.isAuthenticated = true
      this.authStatusListener.next(true)
    }
  }
  private saveAuthData(token, userId){
    localStorage.setItem("token" ,token )
    localStorage.setItem("userId",userId)
  }
  private clearAuthData(){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
  }
  private getAuthData(){
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    if(!token){
      return undefined;
    }
    return {
      token : token ,
      userId : userId
    }
  }
}
