import { Component, OnInit } from '@angular/core';
import {CourseService} from '../shared/course.service';
import { ActivatedRoute , Router } from '@angular/router';
import { ChapterService } from '../shared/chapter.service';
import { ApprenantService } from '../shared/apprenant.service';
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
  num : number
  previous = false
  Next = false
  abonnement ;
  showComments = false
  avis : any = []
  votreAvis
  notee
  subscribed: boolean;
  constructor(private Courseservice:CourseService,private route :ActivatedRoute , private Chapterservice : ChapterService , private router : Router , private Apprenantservice : ApprenantService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.num = this.route.snapshot.params['num']
    this.Courseservice.getCourse(_id)
    .subscribe(resp=>{
      this.course = resp
      console.log(this.course)
      console.log(this.course)
      this.Chapterservice.getChapters(this.course._id)
      .subscribe(resp=>{
        this.chapters = resp
        this.currentChapter = resp[this.num]
        this.wait = true
      })
    })

    this.Courseservice.subscribed(this.Apprenantservice.getId(),this.route.snapshot.params['_id'])
    .subscribe(resp=>{
      if(resp.length !==0){
        this.subscribed = true
        this.abonnement = resp
        this.notee = this.abonnement.note
      }
    })
    console.log(this.course.vue)
    let vuee = this.course.vue +1 ;
   
    this.Courseservice.updateVue(this.Apprenantservice.getId(),vuee.toString())
    .subscribe(res=>{
      console.log(res)
    })
  }
  Previous(){
    this.num-- ;
    if(this.num < 0){
      this.router.navigate(['../'+0],{relativeTo : this.route})
      setTimeout(
        ()=> {
          window.location.reload()
        }, 1000);
    }else{
      this.router.navigate(['../'+this.num],{relativeTo : this.route})
    
      setTimeout(
        ()=> {
          window.location.reload()
        }, 1000);
    }
  }
  next(){
    this.num++
    if(this.num === this.chapters.length){
      this.router.navigate(['../'+(this.chapters.length-1)],{relativeTo : this.route})
      setTimeout(
        ()=> {
          window.location.reload()
        }, 1000);
    }else{
      this.router.navigate(['../'+this.num],{relativeTo : this.route})
    
      setTimeout(
        ()=> {
          window.location.reload()
        }, 1000);
    }


    //
  }
  put(a){
    if(this.subscribed === true ){
      this.notee = a
      const Data ={
        _id : this.abonnement._id ,
        note : a
      }
      this.Courseservice.putNote(Data)
      .subscribe(res=>{
        console.log(res)
      })
    }else{
      this.subscribed = true
      const data = {
        id_apprenant : this.Apprenantservice.getId(),
        id_Course : this.route.snapshot.params['_id']
      }
      this.Courseservice.AjouterAbonnementCours(data)
      .subscribe(res=>{
        
      })
      this.Courseservice.subscribed(this.Apprenantservice.getId(),this.route.snapshot.params['_id'])
      .subscribe(resp=>{
        if(resp.length !==0){
          this.subscribed = true
          this.abonnement = resp
          this.notee = this.abonnement.note
        }
      })

      this.notee = a
      const Dataa ={
        _id : this.abonnement._id ,
        note : a
      }
      this.Courseservice.putNote(Dataa)
      .subscribe(res=>{
        console.log(res)
      })

    }

    
  }
  showcomments(){
    this.Courseservice.getAvis(this.course._id)
    .subscribe(res=>{
      this.avis = res
    })
    this.showComments = true
  }
  putAvis(){
    const Data = {
      _id : this.abonnement._id ,
      Avis : this.votreAvis
    }
    this.Courseservice.putAvis(Data)
    .subscribe(res=>{
      console.log(res)
    })
    this.avis.push(this.votreAvis)
  }
  

}
