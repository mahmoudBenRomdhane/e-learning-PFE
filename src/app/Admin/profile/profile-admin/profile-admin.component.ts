import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss']
})
export class ProfileAdminComponent implements OnInit {
  oldPassword;
  newPassword
  admin ;
  wrongPassword = false
  constructor(private Adminservice : AdminService  , private ResponsableServicec : ResponsableServicecService) { }

  ngOnInit(): void {
    this.Adminservice.getAdmin()
    .subscribe(resp=>{
      this.admin = resp
      console.log(this.admin)
    })
  }
  updatePassword(){
    const Data = {
      oldPassword : this.oldPassword,     
      HashedPassword : this.admin.password
    }
    this.ResponsableServicec.checkPassword(Data)
    .subscribe(res=>{
      console.log(res.worked)
      if(res.worked === 'true'){
        this.wrongPassword = false
        const Data_2 = {
          password : this.newPassword ,
          _id : this.admin._id
        }
        this.Adminservice.updateProfile(Data_2)
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
