import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
  @ViewChild ('f') formulaire
  quiz : any = {
    name : '',
    time : ''
  }
  constructor(private router : Router , private route : ActivatedRoute , private Quizservice : QuizService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.Quizservice.getOneQuiz(_id)
    .subscribe(res=>{
      this.quiz = res 
      console.log(this.quiz)
    })
  }
  submit(){
    this.quiz.name = this.formulaire.value.Name 
    this.quiz.time = this.formulaire.value.duree
    this.Quizservice.updateQuiz(this.quiz)
    .subscribe(res=>{
      console.log(res)
    })
  }


}
