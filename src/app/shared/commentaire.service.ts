import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http : HttpClient) { }
  addComment(data : any){
    return this.http.post('http://localhost:3000/addcommentaire',data)
  }
  getCommentaires(_id:string){
    return this.http.get('http://localhost:3000/commentaires/'+_id)
  }
}
