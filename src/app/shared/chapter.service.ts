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
  addChapter(data){
    return this.http.post('http://localhost:3000/addChapter',data)     
 }
 deleteChapter(_id:string){
  return this.http.delete('http://localhost:3000/deleteChapter/'+_id)
}
}
