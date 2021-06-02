import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }
  getQuizByres(_id:string){
    return this.http.get('http://localhost:3000/quizList/'+_id)
  }
  getQuiz(page : Number){
    return this.http.get('http://localhost:3000/quizLi?page='+page+'&limit=4');
  }
  getOneQuiz(_id:String){
    return this.http.get<{questions : Array<any>}>('http://localhost:3000/quizLi/'+_id)
  }
  postNoteQuiz(data){
    return this.http.post('http://localhost:3000/addScore',data)
  }
  played(id_app,id_quizz){
    return this.http.get<{note : Number}>('http://localhost:3000/played/'+id_app+'/'+id_quizz)
  }
}
