import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
// import { CourselistService } from './courselist.service';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';


const routes: Routes = [
  {path: '', redirectTo:'/addcourse', pathMatch:'full'},

  // {path:'courses', component:CoursesComponent},
  // {path: 'navbar', component:NavbarComponent},
  {path: 'addcourse', component:AddCourseComponent},
  {path: 'navbar', component: NavbarComponent, children:[
    {path:'', component:NavbarComponent},
    // {path: 'addcourse', component:AddCourseComponent},
    {path: 'courses', component: CoursesComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
