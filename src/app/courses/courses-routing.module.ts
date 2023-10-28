import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './component/course-form/course-form.component';
import { CourseHomeComponent } from './component/course-home/course-home.component';
import { CoursesRoutes } from './courses-routes';


const routes: Routes = [
  { path: CoursesRoutes.HOME, component: CourseHomeComponent },
  { path: CoursesRoutes.CREATE, component: CourseFormComponent },
  { path: CoursesRoutes.EDIT, component: CourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
