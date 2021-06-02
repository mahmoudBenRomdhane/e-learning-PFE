import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http : HttpClient) { }
  addQuestion(data : any){
      return this.http.post('http://localhost:3000/addQuestionForum',data)
  }
  getQuestions(page : Number){
      return this.http.get('http://localhost:3000/getForum?page='+page+'&limit=8')
  }
  getQuestion(_id:string){
      return this.http.get('http://localhost:3000/question/'+_id)
  }

}
