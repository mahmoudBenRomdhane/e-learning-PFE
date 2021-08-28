import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { ApprenantService } from '../shared/apprenant.service';
import { ResponsableServicecService } from '../shared/responsable-servicec.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  NotificationList : any = []
  navbar = false ;
  constructor(private Apprenantservice :  ApprenantService ,private ResponsableServicec : ResponsableServicecService, private Adminservice : AdminService) { }

  ngOnInit(): void {
    if(this.Apprenantservice.getId() !== undefined){
      this.Apprenantservice.getNotification(this.Apprenantservice.getId())
      .subscribe(res=>{
        console.log(res)
        this.NotificationList = res
        console.log('app')
      })
      this.navbar = true
    }
    else if(this.ResponsableServicec.getId() !== undefined){
      this.Apprenantservice.getNotification(this.ResponsableServicec.getId())
      .subscribe(res=>{
        console.log(res)
        this.NotificationList = res
        console.log('resp')
      })
    } 
    else if(this.Adminservice.getId() !== undefined ){
      this.Apprenantservice.getNotification(this.Adminservice.getId())
      .subscribe(res=>{
        console.log(res)
        this.NotificationList = res
        console.log('admin')
      })
    }

  }


}
