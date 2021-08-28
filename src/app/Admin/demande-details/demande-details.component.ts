import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.scss']
})
export class DemandeDetailsComponent implements OnInit {
  demande ;
  cv ;
  cvview = false
  password ;
  constructor(private route : ActivatedRoute , private ResponsableService : ResponsableServicecService , private router : Router ) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.ResponsableService.getOnedemande(_id)
    .subscribe(resp=>{
      this.demande = resp
    })
    this.ResponsableService.getCv(_id)
    .subscribe(res=>{
      this.cv = res[0]
      console.log(this.cv)
    })
  }
  accept(){
    this.password = Math.random().toString(36).slice(-8)
    console.log(this.password)
    this.ResponsableService.sendEmail(this.demande.email,'true',this.password)
    .subscribe(res=>{
      console.log(res)
    })
    const Data = {
      nom : this.demande.nom ,
      prenom : this.demande.prenom ,
      email : this.demande.email ,
      spécialite : this.demande.specialite ,
      numTelephone : this.demande.numTelephone ,
      password : this.password
    }
    this.ResponsableService.AjouterResponsable(Data)
    .subscribe(res=>{
      console.log(res)
    })
    this.ResponsableService.deleteDemande(this.route.snapshot.params['_id'])
    .subscribe(res=>{
      console.log(res)
    })
    this.ResponsableService.deleteCv(this.cv._id)
    .subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['admin'])
  }
  refuse(){
    this.ResponsableService.sendEmail(this.demande.email,'false','')
    .subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['admin'])
  }

}

/*let password = req.body.password
bcrypt.hash(password,12)
.then(hashedPassword=>{
    const respo = new Responsable({
        nom : req.body.nom ,
        prenom : req.body.prenom ,
        email : req.body.email ,
        spécialite : req.body.spécialite ,
        numTelephone : req.body.numTelephone ,
        dateInscrption : new Date() , 
        password :hashedPassword,
        //imageProfil : imageUrl

    })

    dateDemande: "2021-06-05T22:25:32.203Z"
email: "mahmoudbenromdhane407@gmail.com"
nom: "aze"
numTelephone: 51651616
prenom: "aze"
specialite: "k,ckef,e"
__v: 0
_id: "60bbf9debf1f7331e46807c4"
*/