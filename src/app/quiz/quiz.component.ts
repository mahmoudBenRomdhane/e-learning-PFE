import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from '../shared/apprenant.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  note : string
  quizes : any = []
  constructor(private Quizservice : QuizService, private route : ActivatedRoute , private router : Router , private as : ApprenantService) { }
  alertCondtion = true
  ngOnInit(): void {
    this.Quizservice.getQuiz(1)
    .subscribe(res=>{
        this.quizes= res ;
        console.log(this.quizes)
    })
  }
  play(_id : string){
    this.Quizservice.played(this.as.getId(),_id)
    .subscribe(resp=>{
      if(resp){
        this.Quizservice.getOneQuiz(_id)
        .subscribe(res=>{
          this.note = resp.note +"/"+ res.questions.length
          this.alertCondtion = false
        })
        console.log(resp.note)
      }
      else{
        this.router.navigate([''+_id],{relativeTo : this.route}) 
      }
    })
     
  }


}
