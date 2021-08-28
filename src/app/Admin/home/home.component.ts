import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/shared/admin.service';
import {Chart , BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'node_modules/chart.js'
import {  registerables} from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs : Subscription
  constructor(private Adminservice : AdminService , private router : Router , private route : ActivatedRoute ) {
    Chart.register(...registerables);
   }
    

  ngAfterViewInit(){

  }
  ngOnInit(): void {
    /*var canvas = <HTMLCanvasElement> document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: 
        datasets: [{
            label: '# of Votes',
            data: [14, 7, 5, 5, 2, 0],
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});*/
    //
    this.userIsAuthenticated = this.Adminservice.getisAuth()
    this.authListenerSubs = this.Adminservice.getauthStatusListener()
    .subscribe(isAuthenticated=>{
      this.userIsAuthenticated = isAuthenticated
    })
    if(!this.userIsAuthenticated){
      this.router.navigate(['login'],{relativeTo : this.route})
    }
    
  }
  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  logOut(){
    this.Adminservice.logOut()
  }
  payment(){
    window.open("https://www.sandbox.paypal.com/");
  }

}
