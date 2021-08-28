import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResponsableServicecService {
  private token: string  
  private ResponsableId : string
  private authStatusListener = new Subject<boolean>()
  isAuthenticated=false
  constructor(private http : HttpClient ,  private router : Router) { }
  getResponsable(id_res:string){
    return this.http.get('http://localhost:3000/responsable/'+id_res)
  }
  AjouterDemande(Data){
    return this.http.post('http://localhost:3000/AddDemande',Data)  
  }
  Ajoutercv(Data){
    return this.http.post('http://localhost:3000/addCv',Data)
  }
  getResponsables(){
    return this.http.get('http://localhost:3000/ResponsablesAcademique')
  }
  deleteRa(_id:string){
    return this.http.delete('http://localhost:3000/ResponsablesAcademique/'+_id);
  }
  getDemande(){
    return this.http.get('http://localhost:3000/getDemandes')
  }
  getOnedemande(_id : string){
    return this.http.get('http://localhost:3000/getDemande/'+_id)
  }
  getCv(_id : string){
    return this.http.get('http://localhost:3000/getCv/'+_id)
  }
  sendEmail(email,content,password){
    return this.http.get('http://localhost:3000/send?email='+email+'&content='+content+'&password='+password+'')
  }
  AjouterResponsable(data){
    return this.http.post('http://localhost:3000/addResponsable',data)
  }
  deleteDemande(_id){
    return this.http.delete('http://localhost:3000/demande/'+_id)
  }
  deleteCv(_id){
    return this.http.delete('http://localhost:3000/demande/'+_id)
  }
  getisAuth(){
    return this.isAuthenticated
  }
  getauthStatusListener(){
    return this.authStatusListener.asObservable()
  }
  private saveAuthData(token, ResponsableId){
    localStorage.setItem("tokenResponsable" ,token )
    localStorage.setItem("ResponsableId",ResponsableId)
  }
  autoAuthUser(){
    const authInformation = this.getAuthData()
    if(authInformation){
      this.token = this.getAuthData().token
      this.ResponsableId = this.getAuthData().userId
      this.isAuthenticated = true
      this.authStatusListener.next(true)
    }
  }
  private getAuthData(){
    const token = localStorage.getItem("tokenResponsable")
    const userId = localStorage.getItem("ResponsableId")
    if(!token){
      return undefined;
    }
    return {
      token : token ,
      userId : userId
    }
  }
  login(responsable : any){
    this.http.post<{token : string , ResponsableId : string }>('http://localhost:3000/LoginResponsable',responsable)
    .subscribe(res=>{
      this.token = res.token ;
      this.ResponsableId = res.ResponsableId ;
      this.isAuthenticated = true ;
      this.authStatusListener.next(true)
      this.saveAuthData(this.token,this.ResponsableId)
      if(this.token){
        this.router.navigate(['responsable'] )
      }
    })
    
  }
  getId(){
    return this.ResponsableId
  }
  checkPassword(Data){
    return this.http.post<{worked}>('http://localhost:3000/changePassword',Data)
  }
  updateProfile(Data){
    return this.http.post<{worked}>('http://localhost:3000/updateProfile',Data)
  }

    logOut(){
      this.token = null ;
      this.ResponsableId = null
      this.isAuthenticated = false ;
      this.authStatusListener.next(false);
      this.clearAuthData()
      this.router.navigate(['responsable/login'])
    }

  private clearAuthData(){
    localStorage.removeItem("tokenResponsable")
    localStorage.removeItem("ResponsableId")
  }
}
