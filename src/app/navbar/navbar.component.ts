import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApprenantService } from '../shared/apprenant.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs : Subscription
  constructor(private Apprenantservice : ApprenantService , private router: Router , private route : ActivatedRoute ) { }
  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

mobilenavbar:boolean=false
class="opensidear"
  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig.component)
    this.userIsAuthenticated = this.Apprenantservice.getIsAuth();
    this.authListenerSubs = this.Apprenantservice
      .getauthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }
sidebar(){
  if(this.mobilenavbar){
      this.class="fermersidear"

  setTimeout(()=>{
this.mobilenavbar=false

  },950)
}
else{
  this.mobilenavbar=true
  this.class="opensidear"
}
}
  onLogOut(){
    this.Apprenantservice.logOut()
}
}
