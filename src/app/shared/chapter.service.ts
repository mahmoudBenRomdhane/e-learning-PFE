import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http : HttpClient) { }
  getChapters(_id:string){
    return this.http.get('http://localhost:3000/CourseChapters/'+_id)
  }
}
