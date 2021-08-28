import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { AdminService } from './shared/admin.service';
import { ApprenantService } from './shared/apprenant.service';
import { ResponsableServicecService } from './shared/responsable-servicec.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAdmin : boolean
  constructor(private Apprenantservice : ApprenantService ,  private router: Router , private route : ActivatedRoute , private user :UserService , private admin : AdminService , private ResponsableServicec : ResponsableServicecService){

  }
  ngOnInit(){
    //this.socket.emit("connected",{data:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"})
    this.Apprenantservice.autoAuthUser()
    this.admin.autoAuthUser()
    this.ResponsableServicec.autoAuthUser()
  }
  title = 'forum';
}
