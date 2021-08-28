import { Component, OnInit, ViewChild } from '@angular/core';
import {ApprenantService} from '../shared/apprenant.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../notifications.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild ('f') form : any
  check : boolean = true
  
  Gender = "Male"
  emails : any
  nameValid = true ;
  passwordvalid = true;
  emailValid = true;
  FirstNameValid = true  ;
  LastNameValid = true ;
  
  constructor(private Apprenantservice : ApprenantService , private router : Router  , private route : ActivatedRoute , private Notificationsservice : NotificationsService ) {
    /*render(
      {
          id: "#payments",
          currency: "USD",
          value: this.accountChoice,
          onApprove: (details) => {
              this.payConditon=true
          }
        }
      );*/
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
    if(this.form.value.FirstName === ''){
      this.FirstNameValid = false
    }
    else{
      this.FirstNameValid = true
    }
    if(this.form.value.LastName === ''){
      this.LastNameValid = false
    }
    else{
      this.LastNameValid = true
    }
    if(!this.form.valid || this.emails.includes(this.form.value.Email)){
      this.emailValid = false
    }else{
      this.emailValid = true
    }
    if(this.nameValid && this.passwordvalid && this.emailValid){
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
      const apprenantData = {email : '',
      username : '',
      password : '',
      date_Forfait : '' , genre : '', nom : '' , prenom : ''}
      apprenantData.username = this.form.value.name
      apprenantData.email = this.form.value.Email
      apprenantData.password = this.form.value.password
      apprenantData.date_Forfait = null
      apprenantData.genre = this.Gender 
      apprenantData.nom = this.form.value.FirstName
      apprenantData.prenom = this.form.value.LastName
      this.SendNotification()
      this.Apprenantservice.addApprenant(apprenantData)
      .subscribe(res=>{
        
        this.router.navigate([''+res._id],{relativeTo : this.route })
      })

    }
    
  }
  /*ChangeaccountChoice(e : Event){
    console.log((<HTMLInputElement>e.target).value);
    this.accountChoice=(<HTMLInputElement>e.target).value
  }*/
  ChangeGender(e: Event){
    this.Gender = (<HTMLInputElement>e.target).value
  }
  SendNotification(){
    const Data = {
      contenu : ` ${this.form.value.Email} Joined us  as a  student with us `,
      id_utilisateur : "606902506ccff71ce4e294cf"
    }
    this.Notificationsservice.sendNotificationToAdmin(Data).subscribe(res=>{
      console.log(res)
    })
  }
}
