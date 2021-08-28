import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServicecService } from '../shared/responsable-servicec.service';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent implements OnInit {
  nom ;
  prenom ;
  email ;
  specialite ;
  numTelephone;
  constructor(private ResponsableService : ResponsableServicecService , private router : Router  , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.nom === undefined  || this.prenom === undefined || this.email === undefined  || this.specialite === undefined  || this.numTelephone === undefined){
      alert('fill in all the fields')
    }else{
      const Data = {
        nom :'',
        prenom :'',
        email : '',
        specialite : '',
        numTelephone : ''
      };
      Data.nom = this.nom 
      Data.prenom = this.prenom
      Data.email = this.email
      Data.specialite = this.specialite
      Data.numTelephone = this.numTelephone
      this.ResponsableService.AjouterDemande(Data)
      .subscribe(res=>{
        this.router.navigate([''+res],{relativeTo : this.route})
      })
      
    }
  }

}
/*
        nom : req.body.nom ,
        prenom : req.body.prenom,
        email : req.body.email,
        specialite : req.body.specialite,
        numTelephone : req.body.numTelephone
    })

*/