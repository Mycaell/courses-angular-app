import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './component/course-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFormComponent } from './component/course-form/course-form.component';
import { CoursesComponent } from './component/course-home/courses.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseFormComponent,
    CoursesComponent
  ],
  imports: [
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
