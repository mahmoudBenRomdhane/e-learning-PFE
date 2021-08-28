import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }
  getQuizByres(_id:string){
    return this.http.get<[{_id : string}]>('http://localhost:3000/quizList/'+_id)
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
  playedApp(id_app){
    return this.http.get<[{id_quiz : String,_id : String}]>('http://localhost:3000/played/'+id_app)
  }
  addQuiz(data){
    return this.http.post('http://localhost:3000/addQuiz',data)
  }
  getQuizRes(id_res){
    return this.http.get('http://localhost:3000/quizList/'+id_res)
  }
  deleteQuiz(_id:string){
    return this.http.delete('http://localhost:3000/deleteQuiz/'+_id)
}
updateQuiz(data){
  return this.http.post('http://localhost:3000/updateQuiz',data)
}
deleteQuizScore(_id){
  return this.http.delete('http://localhost:3000/deleteScoreQuiz/'+_id)
}
}
