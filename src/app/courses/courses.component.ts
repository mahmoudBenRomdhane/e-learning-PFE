import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  rech 
  page = 1
  count : any;
  currentCourses : any ;
  rechOn = false
  constructor(private courseS : CourseService,private route : ActivatedRoute , private router : Router , private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  this.courseS.getCount()
  .subscribe(res=>{
    this.count =res
    console.log(res)
  })
  this.courseS.getCourses(this.page)
  .subscribe(res=>{
    this.currentCourses=res
    console.log(this.currentCourses)
  })
  }
  a(){
    console.log("555555555555555")
  }
  getcourse(_id:string){
    this.router.navigate([''+_id+'/'+0],{relativeTo : this.route})
  }
  nextPage(){
    this.page++;
    this.courseS.getCourses(this.page)
    .subscribe(res=>{
      this.currentCourses = res
    })
  }
  PreviousPage(){
    this.page--;
    this.courseS.getCourses(this.page)
    .subscribe(res=>{
      this.currentCourses = res
    })
  }
  recherche(){
    this.rechOn = true
    const rech = this.rech
    console.log(rech)
    this.courseS.rechercheCourse(rech)
    .subscribe(res=>{
      this.currentCourses = res
      if(this.currentCourses.length === 0){
        
      }
    })
  }
}
