import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  count : any;
  page_1 : any ;
  constructor(private courseS : CourseService,private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
  this.courseS.getCount()
  .subscribe(res=>{
    this.count =res
    console.log(res)
  })
  this.courseS.getCourses(1)
  .subscribe(res=>{
    this.page_1=res
    console.log(this.page_1)
  })
  }
  a(){
    console.log("555555555555555")
  }
  getcourse(_id:string){
    this.router.navigate([''+_id],{relativeTo : this.route})
  }

}
