import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseFormComponent
  ],
  imports: [
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
