import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApprenantService} from '../shared/apprenant.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Apprenantservice : ApprenantService , private router : Router) { }
  user = {
    email : 'dougi@d.com',
    password : '12345678' 
  };
  ngOnInit(): void {
  }
  aas(){
    
    this.Apprenantservice.login(this.user)
    //this.router.navigate(['/'])
    
  }

}
