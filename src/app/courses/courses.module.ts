import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
