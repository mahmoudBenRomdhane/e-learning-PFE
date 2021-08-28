import { Component, OnInit } from '@angular/core';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.scss']
})
export class RprofileComponent implements OnInit {
  oldPassword;
  newPassword
  Responsable
  wrongPassword = false
  constructor(private ResponsableServicec : ResponsableServicecService ) { }

  ngOnInit(): void {
    
    this.ResponsableServicec.getResponsable(this.ResponsableServicec.getId())
    .subscribe(res=>{
      this.Responsable = res
      console.log(this.Responsable)
    })
  }
  updatePassword(){
    console.log(this.oldPassword)
    console.log(this.Responsable.password)
    const Data = {
      oldPassword : this.oldPassword,     
      HashedPassword : this.Responsable.password
    }
    
    this.ResponsableServicec.checkPassword(Data)
    .subscribe(res=>{
      if(res.worked === 'true'){
        const Data_2 = {
          password : this.newPassword ,
          _id : this.Responsable._id
        }
        this.ResponsableServicec.updateProfile(Data_2)
        .subscribe(res=>{
          console.log(res)
          
        })
        alert("changes Saved")
        this.wrongPassword = false
      }else{
        this.wrongPassword = true
      }
    })
  }

}
