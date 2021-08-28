import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  demandes : any = []
  constructor(private ResponsableServicec : ResponsableServicecService , private route : Router , private Router : ActivatedRoute) { }

  ngOnInit(): void {
    this.ResponsableServicec.getDemande()
    .subscribe(res=>{
      this.demandes = res
      console.log(this.demandes)
    })
  }
  details(_id : string){
    this.route.navigate([''+_id],{relativeTo : this.Router})
  }

}
