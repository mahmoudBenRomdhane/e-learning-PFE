import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
import {  registerables} from 'chart.js';
import { CourseService } from '../shared/course.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DoCheck } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit,  AfterViewInit {
    coursesList : any  =  []
  constructor(private Courseservice : CourseService , private spinner: NgxSpinnerService) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
        this.Courseservice.getCoursesStats()
        .subscribe(resp=>{
            this.coursesList = resp
            this.setChart()
        })

  }
  ngAfterViewInit(){

  }
  setChart(){
    var canvas = <HTMLCanvasElement> document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [this.coursesList[0].nom, this.coursesList[1].nom, this.coursesList[2].nom, this.coursesList[3].nom, this.coursesList[4].nom, this.coursesList[5].nom],
        datasets: [{
            label: 'courses with the most Vues',
            data: [this.coursesList[0].vue, this.coursesList[1].vue, this.coursesList[2].vue, this.coursesList[3].vue, this.coursesList[4].vue, this.coursesList[5].vue],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
});
  }

}
