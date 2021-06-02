import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../shared/forum.service';
import {CommentaireService} from '../shared/commentaire.service'
import * as moment from  'moment'
import { ApprenantService } from '../shared/apprenant.service';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss']
})
export class ForumDetailComponent implements OnInit {
  forum_question : any ;
  date : any;
  commentaire = '';
  new_commentaire ={
    contenu : '',
    id_apprenant : '608d99e6beb87400203e2d50',
    id_sujet : this.route.snapshot.params['_id'] ,
    dateCommentaire : new Date()
  }
  commentaires : any = []
  error  = false ;
  apprenant : any
  constructor(private Forumservice : ForumService , private route :ActivatedRoute, private Commentaireservice : CommentaireService , private Apprenantservice : ApprenantService) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.params['_id'];
    this.Forumservice.getQuestion(_id)
    .subscribe(data=>{
      this.forum_question = data 
      //console.log(this.forum_question)
      this.date = moment(this.forum_question.dateQuestion).fromNow()
      //console.log(this.date)
      this.Apprenantservice.getApprenant(this.forum_question.id_apprenant)
      .subscribe(res=>{
        this.apprenant = res
        console.log(this.apprenant)
      })
    })

    this.Commentaireservice.getCommentaires(_id)
    .subscribe(data=>{
      console.log(data)
      this.commentaires = data;
      for (let i =0 ; i<this.commentaires.length;i++){
        this.commentaires[i].dateCommentaire = moment(this.commentaires[i].dateCommentaire).fromNow();
        this.Apprenantservice.getApprenant(this.commentaires[i].id_apprenant)
        .subscribe(res=>{
          this.commentaires[i].id_apprenant = res
        })
      }
      
    })
  }
  ajouterCommentaire(){
    this.new_commentaire.contenu  = this.commentaire ;
    this.new_commentaire.dateCommentaire = new Date();
    if(this.new_commentaire.contenu === ''){
      this.error = true
    }
    else {
      this.error = false
      this.Commentaireservice.addComment(this.new_commentaire)
      .subscribe(res=>{
        //console.log(res)
        
      })
      //this.new_commentaire.dateCommentaire = moment(this.new_commentaire.dateCommentaire).fromNow()
      this.commentaires.push(this.new_commentaire)
      for (let i =0 ; i<this.commentaires.length;i++){
        if(!(typeof(this.commentaires[i].dateCommentaire)==='string'))
        this.commentaires[i].dateCommentaire = moment(this.commentaires[i].dateCommentaire).fromNow()
      }
    }

  }

}
