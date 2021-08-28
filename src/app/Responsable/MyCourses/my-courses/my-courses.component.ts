import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/shared/course.service';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courses : any = []
  constructor(private Courseservice : CourseService , private ResponsableServicec : ResponsableServicecService , private router : Router , private route : ActivatedRoute) { }
  array :any =[]
  ngOnInit(): void {
    this.Courseservice.getCourseByres(this.ResponsableServicec.getId())
    .subscribe(res=>{
      this.courses = res
      console.log(res)
    })
  }
  delete(_id){

      if(confirm('are you sure to delete it ')===true){
        this.Courseservice.deleteCourse(_id)
        .subscribe(res=>{
          console.log()
          this.ngOnInit()
        })
        this.ngOnInit()
      }else{

        this.ngOnInit()
      }
    


  }
  course(_id){
    this.router.navigate([''+_id],{relativeTo : this.route})
  }

}
