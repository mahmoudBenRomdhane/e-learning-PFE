import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from '../shared/apprenant.service';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
  result = false
  playing = true
  score  = 0
  num =0 ;
  quiz : any;
  currentQuestion : any ;
  currentAnswers : any = [] ;
  currentCorrectAnswer = ''
  x : Number = 0
  correctAnswers : string =''
  incorrectAnswers : string = ''
  countdown 
  constructor( private route : ActivatedRoute , private router : Router , private Quizservice : QuizService , private Apprenantservice : ApprenantService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.Quizservice.getOneQuiz(_id)
    .subscribe(res=>{
      this.quiz = res;
      this.currentQuestion = this.quiz.questions[this.num];
      this.currentCorrectAnswer=this.currentQuestion.CorrectAnswer ; 
      this.getQuestions()
      const startingMinutes = this.quiz.time ;
      let time  = startingMinutes * 60
      const checkTime = setInterval(()=>{
        if(!this.playing){
          clearInterval(checkTime)
        }
        const minutes = Math.floor(time / 60)
        let seconds :any = time % 60
        if(minutes===0 && seconds===0){
          this.playing=false
          const data = {
            id_apprenant : this.Apprenantservice.getId(),
            id_quiz :  this.route.snapshot.params['_id'] ,
            note : this.score
          }
          this.Quizservice.postNoteQuiz(data)
          .subscribe(res=>{
            console.log(res)
          })
          clearInterval(checkTime)
        }
        seconds = seconds < 10 ?'0' + seconds : seconds 
        this.countdown = `${minutes}:${seconds}`
        time --
      },1000)

    })
  }
  verfierReponse(e :Event){
    let rep =(<HTMLInputElement>e.target).value
    if(this.currentCorrectAnswer === rep){
        this.score++;
        this.correctAnswers+= `||| ${this.quiz.questions[this.num].nomQuestion} : ${this.currentCorrectAnswer}`
    }else{
        this.incorrectAnswers+= `||| ${this.quiz.questions[this.num].nomQuestion} : ${rep}`
    }
    this.num++;
    if(this.num === this.quiz.questions.length){
      this.playing = false
      this.countdown=''
      const data = {
        id_apprenant : this.Apprenantservice.getId(),
        id_quiz :  this.route.snapshot.params['_id'] ,
        note : this.score
      }
      this.Quizservice.postNoteQuiz(data)
      .subscribe(res=>{
        console.log(res)
      })
    }
    else{
      this.currentQuestion = this.quiz.questions[this.num]
      this.currentCorrectAnswer=this.currentQuestion.CorrectAnswer ;
      this.currentAnswers = [];
      this.getQuestions()
    }

  }
  private getQuestions(){
    this.x =Math.floor(Math.random() * 3)
    if(this.x===0){
      this.currentAnswers.push(this.currentQuestion.CorrectAnswer)
      this.currentAnswers.push(this.currentQuestion.WrongAnswer)
      this.currentAnswers.push(this.currentQuestion.AnotherWrongAnwer)
    }
    else if (this.x === 1){
      this.currentAnswers.push(this.currentQuestion.WrongAnswer)
      this.currentAnswers.push(this.currentQuestion.CorrectAnswer)
      this.currentAnswers.push(this.currentQuestion.AnotherWrongAnwer)
    }
    else if (this.x===2){
      this.currentAnswers.push(this.currentQuestion.AnotherWrongAnwer)
      this.currentAnswers.push(this.currentQuestion.WrongAnswer)
      this.currentAnswers.push(this.currentQuestion.CorrectAnswer)
    }
  }

}
