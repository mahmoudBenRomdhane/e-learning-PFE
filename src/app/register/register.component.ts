import { Component, OnInit, ViewChild } from '@angular/core';
import {ApprenantService} from '../shared/apprenant.service';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  pay = true
  @ViewChild ('f') form : any
  check : boolean = true
  accountChoice = "50.00"
  Gender = "Male"
  emails : any
  nameValid = true ;
  passwordvalid = true;
  emailValid = true;
  payConditon = false
  constructor(private Apprenantservice : ApprenantService ) {
    render(
      {
          id: "#payments",
          currency: "USD",
          value: this.accountChoice,
          onApprove: (details) => {
              this.payConditon=true
          }
        }
      );
   }

  ngOnInit(): void {
    this.Apprenantservice.getEmails()
    .subscribe(res=>{
      this.emails = res
      this.emails=this.emails.map((ele : any)=>{
        return ele.email
      })
      console.log(this.emails)
    })
  }
  onSubmit(){
    if(this.form.value.name === ''){
        this.nameValid=false
    }else{
      this.nameValid=true
    }
    if(this.form.value.password.length <= 8){
      this.passwordvalid=false
    }else{
      this.passwordvalid=true
    }
    if(!this.form.valid || this.emails.includes(this.form.value.Email)){
      this.emailValid = false
    }else{
      this.emailValid = true
    }
    if(!this.payConditon){
      alert('please pay')
    }
    if(this.nameValid && this.passwordvalid && this.emailValid && this.payConditon){
      /*const apprenantData = new FormData();
      apprenantData.append("email",this.form.value.email);
      apprenantData.append("nom",this.form.value.name);
      apprenantData.append("password",this.form.value.password);
      apprenantData.append("type_Forfait",this.accountChoice);
      apprenantData.append("genre",this.Gender);
      this.Apprenantservice.addApprenant(apprenantData)
      .subscribe(res=>{
        console.log(res)
      })*/
      /*const apprenantData = {email : '',
      nom : '',
      password : '',
      type_Forfait : '' , genre : ''}
      apprenantData.nom = this.form.value.name
      apprenantData.email = this.form.value.Email
      apprenantData.password = this.form.value.password
      apprenantData.type_Forfait = this.accountChoice
      apprenantData.genre = this.Gender 
      this.Apprenantservice.addApprenant(apprenantData)
      .subscribe(res=>{
        console.log(res)
      })*/

      console.log(this.Gender)
      console.log(this.accountChoice)
      this.pay=false
    }
    
  }
  ChangeaccountChoice(e : Event){
    console.log((<HTMLInputElement>e.target).value);
    this.accountChoice=(<HTMLInputElement>e.target).value
  }
  ChangeGender(e: Event){
    this.Gender = (<HTMLInputElement>e.target).value
  }
}
