import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email : string ;
  password : string ;
  userIsAuthenticated = false;
  private authListenerSubs : Subscription
  constructor(private Adminservice : AdminService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.Adminservice.getisAuth()
    this.authListenerSubs = this.Adminservice.getauthStatusListener()
    .subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated
    })

  }
  Login(){

    const user = {
      email : this.email,
      password : this.password
    }
    console.log(user)
    this.Adminservice.login(user)
    
  }

}
