import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/shared/quiz.service';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-mes-quiz',
  templateUrl: './mes-quiz.component.html',
  styleUrls: ['./mes-quiz.component.scss']
})
export class MesQuizComponent implements OnInit {
  quiz : any =  []
  constructor(private Quizservice : QuizService ,private ResponsableServicec : ResponsableServicecService , private router : Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
this.Quizservice.getQuizRes(this.ResponsableServicec.getId())
.subscribe(res=>{
  this.quiz = res
  console.log(this.quiz)
})
    
  }
  deleteQuiz(_id){
    if(confirm('are sure ?')===true){
      this.Quizservice.deleteQuiz(_id)
      .subscribe(res=>{
        console.log(res)
      })
      window.location.reload()
    }
    else{
      
    }
  }
  quizDetails(_id){
    this.router.navigate([''+_id],{relativeTo : this.route})
  }

}
