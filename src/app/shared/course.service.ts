import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) {
    
   }
  getCount(){
    return this.http.get('http://localhost:3000/courseCount')
  }
  getCourses(page : Number){
    return this.http.get('http://localhost:3000/courses?page='+page+'&limit=8')
  }
  getCourse(_id:string){
    return this.http.get('http://localhost:3000/courseLi/'+_id)
  }
  getCourseByres(_id:string){
    return this.http.get<[{_id : string}]>('http://localhost:3000/coursesList/'+_id)
  }
  addCourse(data){
    return this.http.post('http://localhost:3000/addcourse',data)
  }
  deleteCourse(_id:string){
    return this.http.delete('http://localhost:3000/deleteCourse/'+_id)
}
  rechercheCourse(rech:string){
    return this.http.get('http://localhost:3000/recherche/'+rech)
  }
  AjouterAbonnementCours(data){
    return this.http.post('http://localhost:3000/addAbonnement',data)
  }
  subscribed(id_apprenant,id_Course){
    return this.http.get<[]>('http://localhost:3000/subscribed/'+id_apprenant+'/'+id_Course)
  }
  putNote(data){
    return this.http.post('http://localhost:3000/putNote',data)
  }
  getAvis(_id){
    return this.http.get('http://localhost:3000/getAvis/'+_id)
  }
  putAvis(Data){
    return this.http.post('http://localhost:3000/putAvis',Data)
  }
  checkCourses(_id){
    return this.http.get('http://localhost:3000/checkCourses/'+_id)
  }
  getCoursesStats(){
    return this.http.get('http://localhost:3000/statsBestCourses')
  }
  getApprenantCourses(_id){
    return this.http.get<[{_id : string}]>('http://localhost:3000/getApprenatCourses/'+_id)
  }
  deleteApprenantCourses(_id){
    return this.http.delete('http://localhost:3000/deleteCoursInfo/'+_id)
  }
  updateVue(_id , vue){
    return this.http.get('http://localhost:3000/updatevue/'+_id+'/'+vue)
  }
}
