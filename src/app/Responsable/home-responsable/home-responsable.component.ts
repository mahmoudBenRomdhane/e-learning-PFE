import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-home-responsable',
  templateUrl: './home-responsable.component.html',
  styleUrls: ['./home-responsable.component.scss']
})
export class HomeResponsableComponent implements OnInit {
  Gerercourses = false
  GererQuiz = false
  userIsAuthenticated = false;
  private authListenerSubs : Subscription
  constructor(private ResponsableServicec : ResponsableServicecService , private router : Router , private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.ResponsableServicec.getisAuth()
    this.authListenerSubs = this.ResponsableServicec.getauthStatusListener()
    .subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated
    })
    if(!this.userIsAuthenticated){
      this.router.navigate(['login'],{relativeTo : this.route})
    }
  }
  logout(){
    this.ResponsableServicec.logOut()

  }

}
