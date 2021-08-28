import { Component, OnInit } from '@angular/core';
import { ApprenantService } from 'src/app/shared/apprenant.service';
import * as moment from  'moment'
import { QuizService } from 'src/app/shared/quiz.service';
import { CourseService } from 'src/app/shared/course.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  Students : any = []
  constructor(private Apprenantservice : ApprenantService , private Quizservice : QuizService , private Courseservice :CourseService ) { }

  ngOnInit(): void {
    this.Apprenantservice.getapprenants()
    .subscribe(resp=>{
      this.Students=resp
      for(let i =0 ;i<this.Students.length;i++){
        this.Students[i].date_Forfait = moment(this.Students[i].date_Forfait).fromNow()
        if(this.Students[i].date_Forfait === "Invalid date"){
          this.Students[i].date_Forfait = 'expired Date'
        }
      }
    })
  }
  OnDelete(_id){
    if(confirm('are you sure to delete this Studnet ?')== true){
      this.Apprenantservice.deleteApprenant(_id)
      .subscribe(resp=>{
        console.log(resp)
       
      })
      this.deletequizInfo(_id )
      this.deleteCourseInfo(_id)
      this.deleteNotification(_id)
      window.location.reload()
    }
  }
  deletequizInfo(_id ){
    this.Quizservice.playedApp(_id)
    .subscribe(res=>{
      console.log(res)
      res.forEach((ele)=>{
        this.Quizservice.deleteQuizScore(ele._id)
        .subscribe(resp=>{
          console.log(resp)
        })
      })
    })
  }
  deleteCourseInfo(_id){
    this.Courseservice.getApprenantCourses(_id)
    .subscribe(res=>{
      console.log(res)
      res.forEach((ele)=>{
        this.Courseservice.deleteApprenantCourses(ele._id)
        .subscribe(resp=>{
          console.log(resp)
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
