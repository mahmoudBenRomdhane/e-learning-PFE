import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprenantService } from '../shared/apprenant.service';
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
    id_apprenant : this.Apprenantservice.getId()
  }
  constructor(private ForumService : ForumService  , private Apprenantservice : ApprenantService , private router : Router) { }

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
      this.router.navigate([''])
    }
  }

}
