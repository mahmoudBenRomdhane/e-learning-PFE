import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { ApprenantService } from '../shared/apprenant.service';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute , private Apprenantservice : ApprenantService) { 
        render(
      {
          id: "#payments",
          currency: "USD",
          value: '150',
          onApprove: (details) => {
              const newDate = new Date()
              newDate.setMonth(newDate.getMonth()+12);
              const Data = {
                _id : this.route.snapshot.params['_id'],
                forfait : newDate
              }
              this.Apprenantservice.setForfait(Data)
              .subscribe(res=>{
                console.log(res)
              })
              this.router.navigate(['login'])
          }
          
        }
      );
      render(
        {
            id: "#payments_1",
            currency: "USD",
            value: '90',
            onApprove: (details) => {
              const newDate = new Date()
              newDate.setMonth(newDate.getMonth()+6);
              const Data = {
                _id : this.route.snapshot.params['_id'],
                forfait : newDate
              }
              this.Apprenantservice.setForfait(Data)
              .subscribe(res=>{
                console.log(res)
              })
              this.router.navigate(['login'])
            }
          }
        );
        render(
          {
              id: "#payments_2",
              currency: "USD",
              value: '50',
              onApprove: (details) => {
                const newDate = new Date()
                newDate.setMonth(newDate.getMonth()+3);
                const Data = {
                  _id : this.route.snapshot.params['_id'],
                  forfait : newDate
                }
                this.Apprenantservice.setForfait(Data)
                .subscribe(res=>{
                  console.log(res)
                })
                this.router.navigate(['login'])
              }
            }
          );
  }

  ngOnInit(): void {
    
  }

  later(){
    this.router.navigate(['../'],{relativeTo : this.route})
  }
}
