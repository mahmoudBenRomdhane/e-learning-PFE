import { Component, OnInit } from '@angular/core';
import {ForumService} from '../shared/forum.service'

@Component({
  selector: 'app-poser-question',
  templateUrl: './poser-question.component.html',
  styleUrls: ['./poser-question.component.scss']
})
export class PoserQuestionComponent implements OnInit {
  contenu : string = "";
  validation : Boolean = false ;
  question = {
    contenu : '',
    id_apprenant : '608d99e6beb87400203e2d50'
  }
  constructor(private ForumService : ForumService ) { }

  ngOnInit(): void {
  }
  addQuestion(){
    if(this.contenu === ''){
      this.validation = true
    }
    else {
      this.validation = false;
      this.question.contenu = this.contenu;
      this.ForumService.addQuestion(this.question)
      .subscribe(res=>{
        console.log(res)
      })
    }
  }

}
