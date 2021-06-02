import { Component, OnInit } from '@angular/core';
import { ApprenantService } from './shared/apprenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private Apprenantservice : ApprenantService){

  }
  ngOnInit(){
    this.Apprenantservice.autoAuthUser()
  }
  title = 'forum';
}
