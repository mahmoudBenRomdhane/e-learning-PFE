import { Component, OnInit } from '@angular/core';
import {CourseService} from '../shared/course.service';
import { ActivatedRoute , Router } from '@angular/router';
import {ResponsableServicecService} from '../shared/responsable-servicec.service'
import { QuizService } from '../shared/quiz.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course : any ={
    Speciality :'' ,
    descrption_text : '',
    difficulty : '',
    id_responable : '',
    image : '',
    nom : ''
  }
  responsable : any = {
    email : '',
    nom : '',
    prenom : '',
    _id : ''
  }
  responsabalequiz : any = [] 
  responsableCourses : any = []
  constructor(private Courseservice:CourseService , private route :ActivatedRoute ,private ResponsableService:ResponsableServicecService , private quizservice : QuizService ,  private router : Router) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    console.log(_id)
    this.Courseservice.getCourse(_id)
    .subscribe(data=>{
      this.course=data 
      console.log(this.course.id_responable)
      this.ResponsableService.getResponsable(this.course.id_responable)
      .subscribe(data=>{
        this.responsable=data
        console.log(this.responsable)
        this.Courseservice.getCourseByres(this.responsable._id)
        .subscribe(data=>{
          //console.log(data)
          this.responsableCourses=data
          //console.log(this.responsableCourses)
          this.quizservice.getQuizByres(this.responsable._id)
          .subscribe(data=>{
            this.responsabalequiz=data
          })
        })
      })
    })
  }
  startLearning(_id:string){
    this.router.navigate(['../../learning/'+_id],{relativeTo : this.route})
  }
}
/*
dateInscrption: "2021-03-19T10:13:50.791Z"
email: "dougi@gmail.com"
nom: "Ahmed"
numTelephone: 22784545
prenom: "laajili"
__v: 0
_id: "605eae6f5ab5b9c75c16b451"
*/