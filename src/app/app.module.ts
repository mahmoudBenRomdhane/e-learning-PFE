import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ApprenantService } from './shared/apprenant.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './shared/course.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ResponsableServicecService } from './shared/responsable-servicec.service';
import { ResponsableProfileComponent } from './responsable-profile/responsable-profile.component';
import { QuizService } from './shared/quiz.service';
import { LearningComponent } from './learning/learning.component';
import { ChapterService } from './shared/chapter.service';
import { PoserQuestionComponent } from './poser-question/poser-question.component';
import { ForumService } from './shared/forum.service';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { CommentaireService } from './shared/commentaire.service';
import { QuizComponent } from './quiz/quiz.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { AuthIntercptorService } from './shared/auth-intercptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    CourseDetailsComponent,
    ResponsableProfileComponent,
    LearningComponent,
    PoserQuestionComponent,
    ForumComponent,
    ForumDetailComponent,
    QuizComponent,
    PlayQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : AuthIntercptorService , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
