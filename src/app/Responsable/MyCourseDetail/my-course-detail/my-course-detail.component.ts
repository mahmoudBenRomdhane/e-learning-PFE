import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from 'src/app/shared/chapter.service';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-my-course-detail',
  templateUrl: './my-course-detail.component.html',
  styleUrls: ['./my-course-detail.component.scss']
})
export class MyCourseDetailComponent implements OnInit {
  form : FormGroup
  course 
  chapters : any = []
  constructor(private Courseservice : CourseService , private route : ActivatedRoute , private Chapterservice : ChapterService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.Courseservice.getCourse(_id)
    .subscribe(resp=>{
      this.course = resp
      console.log(this.course)
    })
    this.Chapterservice.getChapters(_id)
    .subscribe(data=>{
      //console.log(data)
      this.chapters=data
      console.log(this.chapters)
    })
  }
  deleteChapter(_id){
    this.Chapterservice.deleteChapter(_id)
    .subscribe(data=>{
      console.log(data)
    })
    window.location.reload()
  }
  onSubmit(){

  }

}
