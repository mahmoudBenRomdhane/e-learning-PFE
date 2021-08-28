import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApprenantService} from '../shared/apprenant.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Erreur  : string= ''
  choix ;
  constructor(private Apprenantservice : ApprenantService , private router : Router) { }
  user = {
    email : '',
    password : '' 
  };
  ngOnInit(): void {
  }
  login(){
    let res ;
    if(!this.user.email || !this.user.password){
      this.Erreur = "Invalid Email or Password"
    }
    else{
      
      this.Apprenantservice.login(this.user) 
      setTimeout(() => {
        res = this.Apprenantservice.getIsAuth()
        if(!res){
          this.Erreur = 'lk,lk'
        }
      }, 1000);
    }


  }

}
