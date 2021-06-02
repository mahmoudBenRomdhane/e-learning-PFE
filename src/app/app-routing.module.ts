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
  path:'courses/:_id',
  component : CourseDetailsComponent,
  canActivate : [AuthGuard]
},
{
  path :'learning/:_id',
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AppRoutingModule { }
