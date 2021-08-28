import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz.service';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-ajouter-quiz',
  templateUrl: './ajouter-quiz.component.html',
  styleUrls: ['./ajouter-quiz.component.scss']
})
export class AjouterQuizComponent implements OnInit {
  name 
  Speciality
  difficulty
  time
  quiz = {
    name : '',
    Speciality : '',
    difficulty : '',
    time : '',
    questions : [],
    id_responable : ''
  } 
  q
  correct
  Wrong
  Wrong2 
  questions = []
  quizDon = false
  errors = {
    name : '',
    spec : '',
    diff : '',
    dur : ''
  }
  constructor(private Quizservice :QuizService , private ResponsableServicec : ResponsableServicecService ) { }

  ngOnInit(): void {
    this.quiz.id_responable=this.ResponsableServicec.getId()
  }

  submit(){
    if(this.name === undefined){
      this.errors.name = 'required'
    }
    if(this.Speciality === undefined){
      this.errors.spec = 'required'
    }
    if(this.difficulty === undefined){
      this.errors.diff = 'required'
    }
    if(this.time === undefined){
      this.errors.dur = 'required'
    }
    this.quiz.name = this.name
    this.quiz.Speciality = this.Speciality
    this.quiz.difficulty = this.difficulty
    this.quiz.time = this.time
    if(this.quiz.name !== undefined && this.quiz.Speciality !== undefined  && this.quiz.difficulty!==undefined  && this.time !== undefined){
      this.quizDon = true
    }
    console.log(this.quiz)
   }
   addQuestion(){
     if(this.quiz.questions.length <= 3){
      this.Ajouter()
     }else{
       if(confirm('want to add More Questions')===true){
          this.Ajouter()
       }else{
         this.Quizservice.addQuiz(this.quiz)
         .subscribe(resp=>{
           console.log(resp)
         })
       }
     }
   }
   private Ajouter(){
    const newQestionQuiz = {
      nomQuestion :'' ,
      CorrectAnswer :'' ,
      WrongAnswer :'' ,
      AnotherWrongAnwer :''
    }
    newQestionQuiz.nomQuestion = this.q ;
    newQestionQuiz.CorrectAnswer = this.correct
    newQestionQuiz.WrongAnswer = this.Wrong 
    newQestionQuiz.AnotherWrongAnwer = this.Wrong2
    this.quiz.questions.push(newQestionQuiz)
    console.log(this.quiz.questions)
    this.q = ''
    this.correct = ''
    this.Wrong = ''
    this.Wrong2 = ''
   }
}/*
nomQuestion : this.form_2.value.Question ,
CorrectAnswer : this.form_2.value.correctA ,
WrongAnswer : this.form_2.value.wrongA ,
AnotherWrongAnwer : this.form_2.value.AwrongA */