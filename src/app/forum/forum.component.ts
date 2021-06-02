import { Component, OnInit } from '@angular/core';
import { ForumService } from '../shared/forum.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  forums_1 : any;
  forums_1_1 : any;
  forums_1_2 : any
  constructor(private Forumservice : ForumService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.Forumservice.getQuestions(1)
    .subscribe(res=>{
      this.forums_1=res;
      console.log(this.forums_1)
      this.forums_1_1=this.forums_1.slice(0,2)
      console.log(this.forums_1_1)
      this.forums_1_2 = this.forums_1.slice(2,4)
      console.log(this.forums_1_2)
    })
  }
  details(_id:string){
    this.router.navigate([''+_id],{relativeTo : this.route})
  }

}
