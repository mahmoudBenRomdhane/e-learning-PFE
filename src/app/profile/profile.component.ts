import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../shared/apprenant.service';
import { QuizService } from '../shared/quiz.service';
import { ResponsableServicecService } from '../shared/responsable-servicec.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  oldPassword;
  newPassword
  user :any
  wrongPassword = false
  constructor(private Apprenantservice : ApprenantService , private Quizservice : QuizService , private ResponsableServicec : ResponsableServicecService ) { }

  ngOnInit(): void {
    this.Apprenantservice.getApprenant(this.Apprenantservice.getId())
    .subscribe(res=>{
      this.user=res
    })
  }
  updatePassword(){
    const Data = {
      oldPassword : this.oldPassword,     
      HashedPassword : this.user.password
    }
    this.ResponsableServicec.checkPassword(Data)
    .subscribe(res=>{
      if(res.worked === 'true'){
        const Data_2 = {
          password : this.newPassword ,
          _id : this.user._id
        }
        this.Apprenantservice.updateProfile(Data_2)
        .subscribe(res=>{
          console.log(res)
        })
        alert('changes Saved')
        this.wrongPassword = false
      }else{
        this.wrongPassword = true
        console.log(res.worked)
      }
    })
  }


}
