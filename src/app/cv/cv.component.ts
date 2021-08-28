import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServicecService } from '../shared/responsable-servicec.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  workexp = false ;
  _id : string
  form: FormGroup
  imageData : String
  constructor(private route : ActivatedRoute, private ResponsableService : ResponsableServicecService , private router :Router ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id']
    this.form = new FormGroup({
      Facebook : new FormControl(null),
      GitHub : new FormControl(null) ,
      linkedin : new FormControl(null) ,
      address : new FormControl(null),
      professionalExperience : new FormControl(null) ,
      skills : new FormControl (null),
      image: new FormControl(null) 
    })
  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(){
    const _id = this._id
    console.log(_id)
    const CvData = new FormData();
      CvData.append("compteFacebook",this.form.value.Facebook)
      CvData.append("compteGithub",this.form.value.GitHub)
      CvData.append("compteLinkedin",this.form.value.linkedin)
      CvData.append("experienceProffesionelle",this.form.value.professionalExperience)
      CvData.append("Competence",this.form.value.skills)
      CvData.append("id_demande",_id)
      CvData.append("image",this.form.value.image,_id)
      this.ResponsableService.Ajoutercv(CvData)
      .subscribe(res=>{
        console.log(res)
      })
      this.router.navigate([''])
  }

}
