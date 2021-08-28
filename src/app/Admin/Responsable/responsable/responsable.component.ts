import { Component, OnInit } from '@angular/core';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';
import * as moment from  'moment'
import { CourseService } from 'src/app/shared/course.service';
import { QuizService } from 'src/app/shared/quiz.service';
import { ApprenantService } from 'src/app/shared/apprenant.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.scss']
})
export class ResponsableComponent implements OnInit {
  responsables :   any = []
  constructor(private ResponsableService : ResponsableServicecService ,private Courseservice : CourseService , private Quizservice : QuizService , private Apprenantservice : ApprenantService) { }

  ngOnInit(): void {
    this.ResponsableService.getResponsables()
    .subscribe(res=>{
      this.responsables = res
      for(let i =0 ; i<this.responsables.length;i++){
        this.responsables[i].dateInscrption = moment(this.responsables[i].dateInscrption).fromNow()
      }
    })
  }
  OnDelete(_id : string){
    if(confirm('are you sure to delete this Manager ?')== true){
      this.ResponsableService.deleteRa(_id)
      .subscribe(re=>{
        console.log(re)
      })
    }
    this.deleteCourses(_id)
    this.deleteQuiz(_id)
    this.deleteNotification(_id)
    window.location.reload()
  }
  deleteCourses(_id){
    this.Courseservice.getCourseByres(_id)
    .subscribe(resp=>{
      resp.forEach(ele=>{
        this.Courseservice.deleteCourse(ele._id)
        .subscribe(res=>{
          console.log(res)
        })
      })
    })
  }
  deleteQuiz(_id){
    this.Quizservice.getQuizByres(_id)
    .subscribe(resp=>{
      resp.forEach(ele=>{
        this.Quizservice.deleteQuiz(ele._id).subscribe(res=>{
          console.log(res)
        })
      })
    })
  }
  deleteNotification(_id){
    this.Apprenantservice.getNotification(_id)
    .subscribe(resp=>{
      console.log(resp)
      resp.forEach((ele)=>{
        this.Apprenantservice.deleteNotification(ele._id)
        .subscribe(respp=>{
          console.log(respp)
        })
      })
    })
  }

}
