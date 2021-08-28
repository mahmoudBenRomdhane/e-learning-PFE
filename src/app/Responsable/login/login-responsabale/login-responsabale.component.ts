import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-login-responsabale',
  templateUrl: './login-responsabale.component.html',
  styleUrls: ['./login-responsabale.component.scss']
})
export class LoginResponsabaleComponent implements OnInit {
  email : string ;
  password : string ;
  userIsAuthenticated = false;
  private authListenerSubs : Subscription
  constructor(private ResponsableServicec : ResponsableServicecService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.ResponsableServicec.getisAuth()
    this.authListenerSubs = this.ResponsableServicec.getauthStatusListener()
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
    this.ResponsableServicec.login(user)
    
  }
}
