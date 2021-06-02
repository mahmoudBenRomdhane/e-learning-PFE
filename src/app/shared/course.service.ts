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
    return this.http.get('http://localhost:3000/coursesList/'+_id)
  }
}
