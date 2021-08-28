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
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ResponsableProfileComponent } from './responsable-profile/responsable-profile.component';
import { LearningComponent } from './learning/learning.component';
import { PoserQuestionComponent } from './poser-question/poser-question.component';
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { QuizComponent } from './quiz/quiz.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { AuthIntercptorService } from './shared/auth-intercptor.service';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ProfileComponent } from './profile/profile.component';
import { PayComponent } from './pay/pay.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './Admin/home/home.component';
import { AdminLoginComponent } from './Admin/login/admin-login/admin-login.component';
import { ResponsableComponent } from './Admin/Responsable/responsable/responsable.component';
import { DemandeComponent } from './Admin/demandes/demande/demande.component';
import { DemandeDetailsComponent } from './Admin/demande-details/demande-details.component';
import { CvDetailsComponent } from './Admin/cv-details/cv-details.component';
import { ApperenantComponent } from './Admin/apperenant/apperenant/apperenant.component';
import { StudentsComponent } from './Admin/students/students/students.component';
import { HomeResponsableComponent } from './Responsable/home-responsable/home-responsable.component';
import { LoginResponsabaleComponent } from './Responsable/login/login-responsabale/login-responsabale.component';
import { AddResponsableComponent } from './Responsable/addResponsable/add-responsable/add-responsable.component';
import { MyCoursesComponent } from './Responsable/MyCourses/my-courses/my-courses.component';
import { MyCourseDetailComponent } from './Responsable/MyCourseDetail/my-course-detail/my-course-detail.component';
import { AjouterQuizComponent } from './Responsable/AjouterQuiz/ajouter-quiz/ajouter-quiz.component';
import { MesQuizComponent } from './Responsable/mesQuiz/mes-quiz/mes-quiz.component';
import { QuizDetailsComponent } from './Responsable/quizDetails/quiz-details/quiz-details.component';
import { RprofileComponent } from './Responsable/rProfile/rprofile/rprofile.component';
import { NotificationComponent } from './notification/notification.component';
import { StatsComponent } from './stats/stats.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ProfileAdminComponent } from './Admin/profile/profile-admin/profile-admin.component';
import { FillCvComponent } from './fill-cv/fill-cv.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
    PlayQuizComponent,
    WorkWithUsComponent,
    ProfileComponent,
    PayComponent,
    CvComponent,
    HomeComponent,
    AdminLoginComponent,
    ResponsableComponent,
    DemandeComponent,
    DemandeDetailsComponent,
    CvDetailsComponent,
    ApperenantComponent,
    StudentsComponent,
    HomeResponsableComponent,
    LoginResponsabaleComponent,
    AddResponsableComponent,
    MyCoursesComponent,
    MyCourseDetailComponent,
    AjouterQuizComponent,
    MesQuizComponent,
    QuizDetailsComponent,
    RprofileComponent,
    NotificationComponent,
    StatsComponent,
    ProfileAdminComponent,
    FillCvComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : AuthIntercptorService , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
