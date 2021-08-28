import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'src/app/shared/chapter.service';
import { CourseService } from 'src/app/shared/course.service';
import { ResponsableServicecService } from 'src/app/shared/responsable-servicec.service';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.scss']
})
export class AddResponsableComponent implements OnInit {
  @ViewChild ('videoInput')  videoInput : ElementRef
  @ViewChild ('imageInput') imageInput : ElementRef
  chapterNumber = 0
  courseId
  descrption_text
  form_2 : FormGroup
  courseAdded = false
  form: FormGroup;
  imageData: string;
  videoData : string ;
  respId ;
  imageError = ''
  Speciality = ['Web Development','Data Science','Mobile Development','Programming Languages','Game Development','NetWork And Security','Busines Intelligence','Data Analysics']
  difficulty = ['easy', 'Meduim' , 'Hard']
  nameError = ''
  textError = ''
  diffError = ''
  specError = ''
  constructor(private Courseservice: CourseService , private Chapterservice :ChapterService , private router : Router , private route : ActivatedRoute , private ResponsableServicec: ResponsableServicecService) { }

  ngOnInit(): void {
    this.respId=this.ResponsableServicec.getId()
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      Speciality : new FormControl(null),
      difficulty : new FormControl(null),
      descrption_text : new FormControl(null)
    });
    this.form_2 = new FormGroup({
      chapterName : new FormControl(null),
      chapterDescrption : new FormControl(null),
      video : new FormControl(null)
    })
  }
  onSubmit(){
    console.log(this.form.value.name)
    if(this.form.value.name === null){
      
      this.nameError='required'
    }
    if(this.form.value.Speciality === null){
      this.specError='required'
    }
    if(this.form.value.difficulty === null){
      this.diffError = 'required'
    }
    if(this.form.value.descrption_text === null){
      this.textError = 'required'
    }
    if(this.form.value.name !== null && this.form.value.Speciality !== null &&  this.form.value.difficulty !== null && this.form.value.descrption_text !== null){
      const CourseData = new FormData();
      CourseData.append("name", this.form.value.name);
      CourseData.append("image", this.form.value.image, this.form.value.name);
      CourseData.append("Speciality" , this.form.value.Speciality)
      CourseData.append("difficulty" , this.form.value.difficulty)
      CourseData.append("descrption_text" , this.form.value.descrption_text)  
      CourseData.append("id_responable",this.respId)
      console.log(CourseData.getAll)
        this.Courseservice.addCourse(CourseData)
        .subscribe(responseData=>{
          console.log(responseData)
          this.courseId = responseData
          console.log(this.courseId)
        })
        this.form.reset();
        this.courseAdded = true
    }


  }
   verifyImage(event: Event){
  
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
      this.imageError = ''
    }else{
      this.form.patchValue({ image: null });
      this.imageInput.nativeElement.value = ''
      this.imageError = 'Please Select an Image , any other Sort of file is refused'
    }
  }
  onVideoSelect(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form_2.patchValue({ video: file });
    const allowedMimeTypes = ["video/mp4"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.videoData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit_2(){
    
    let chapterData = new FormData ;
    chapterData.append("chapterName", this.form_2.value.chapterName);
    chapterData.append("chapterDescrption",this.form_2.value.chapterDescrption);
    chapterData.append("video",this.form_2.value.video,this.form_2.value.chapterName);
    chapterData.append("id_course",this.courseId);
    chapterData.append("chapterNumber",this.chapterNumber.toString())
    this.Chapterservice.addChapter(chapterData)
    .subscribe(responseData=>{
      console.log(responseData)
    })
    this.videoInput.nativeElement.value = ''
    this.form_2.reset()
    this.videoData = null
    this.chapterNumber++ 
    if(this.chapterNumber>=2){
      if(confirm('Do you want to Add more Chapters ?')=== true){
        
      }else{
        this.router.navigate(['responsable'])
      }
    }

  }
}
