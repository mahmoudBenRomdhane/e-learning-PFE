import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PoserQuestionComponent} from './poser-question/poser-question.component'
import { ForumComponent } from './forum/forum.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { QuizComponent } from './quiz/quiz.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { AuthGuard } from './shared/auth.guard.service';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ProfileComponent } from './profile/profile.component';
import { PayComponent } from './pay/pay.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './Admin/home/home.component';
import { AdminLoginComponent } from './Admin/login/admin-login/admin-login.component';
import { ResponsableComponent } from './Admin/Responsable/responsable/responsable.component';
import { DemandeComponent } from './Admin/demandes/demande/demande.component';
import { DemandeDetailsComponent } from './Admin/demande-details/demande-details.component';
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
import { ProfileAdminComponent } from './Admin/profile/profile-admin/profile-admin.component';


const routes: Routes = [
  {path:'',
   component:AcceuilComponent,
   canActivate : [AuthGuard]
  },
  {path:'login',
  component:LoginComponent
},
{
  path : 'register',
  component:RegisterComponent
},
{
  path : 'courses',
  component : CoursesComponent,
  canActivate : [AuthGuard]
},
{
  path:'courses/:_id/:num',
  component : LearningComponent,
  canActivate : [AuthGuard]
},

{
  path : 'askQuestion',
  component : PoserQuestionComponent,
  canActivate : [AuthGuard]
},
{
  path : 'forumList',
  component : ForumComponent,
  canActivate : [AuthGuard]
},
{
  path : 'forumList/:_id',
  component : ForumDetailComponent,
  canActivate : [AuthGuard]
},
{
  path : 'quizes',
  component : QuizComponent,
  canActivate : [AuthGuard]
},
{
  path : 'quizes/:_id',
  component : PlayQuizComponent,
  canActivate : [AuthGuard]
},
{
  path : 'WorkWithUS',
  component : WorkWithUsComponent,
},
{
  path :'WorkWithUS/:_id',
  component : CvComponent
},
{
  path : 'profile',
  component : ProfileComponent,
  canActivate : [AuthGuard]
},
{
  path : 'register/:_id',
  component : PayComponent
},
{
  path : 'notification',
  component : NotificationComponent
}
,
{
  path : 'admin',
  component : HomeComponent,
  children : [{path : 'login',component : AdminLoginComponent} , {path : 'responsable',component : ResponsableComponent} ,
  {path : 'demandes',component : DemandeComponent } , {path : 'demandes/:_id' , component : DemandeDetailsComponent},
  {path : 'students',component :StudentsComponent} , {path : '',component:StatsComponent},
  {path : 'notification',component : NotificationComponent},
  {path : 'profile',component : ProfileAdminComponent}
]
},
{
  path : 'responsable',
  component : HomeResponsableComponent,
  children : [{path : 'login',component : LoginResponsabaleComponent },{path : 'addCourse',component :AddResponsableComponent}
,{path : 'MyCourses',component:MyCoursesComponent },{path : 'MyCourses/:_id',component : MyCourseDetailComponent },
{ path : 'AjouterQuiz',component : AjouterQuizComponent } , {path : 'Quiz',component : MesQuizComponent},
{path : 'Quiz/:_id',component : QuizDetailsComponent} ,
{path : 'ResponsableProfile',component : RprofileComponent}, {path : '',component : MyCoursesComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
