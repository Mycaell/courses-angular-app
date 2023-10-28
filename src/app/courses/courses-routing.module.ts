import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './component/course-form/course-form.component';
import { CoursesComponent } from './component/course-home/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'novo', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
