import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './component/course-form/course-form.component';
import { CourseHomeComponent } from './component/course-home/course-home.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [
    CourseFormComponent,
    CourseHomeComponent,
    CourseListComponent
  ],
  imports: [
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
