import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './component/course-form/course-form.component';
import { CourseHomeComponent } from './component/course-home/course-home.component';


const routes: Routes = [
  { path: '', component: CourseHomeComponent },
  { path: 'novo', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
