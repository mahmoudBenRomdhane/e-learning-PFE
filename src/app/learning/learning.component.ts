import { Component, OnInit } from '@angular/core';
import {CourseService} from '../shared/course.service';
import { ActivatedRoute , Router } from '@angular/router';
import { ChapterService } from '../shared/chapter.service';
@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  course : any ={
    Speciality :'' ,
    descrption_text : '',
    difficulty : '',
    id_responable : '',
    image : '',
    nom : ''
  }
  chapters : any = []
  wait = false
  currentChapter : any 
  constructor(private Courseservice:CourseService,private route :ActivatedRoute , private Chapterservice : ChapterService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.Courseservice.getCourse(_id)
    .subscribe(data=>{
      this.course=data;
      console.log(this.course)
      this.Chapterservice.getChapters(this.course._id)
      .subscribe(data=>{
        this.chapters=data;
        console.log(data)
        console.log(this.chapters[1].nom)
        this.currentChapter= this.chapters[0]
        this.wait=true
      })
    })
    
  }
  Previous(){
    this.currentChapter=this.chapters[(this.currentChapter.chapitre_num)-1]
  }
  next(){
      this.currentChapter=this.chapters[(this.currentChapter.chapitre_num)+1]
  }

}
