import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  readonly courses$: Observable<Course[]>;

  readonly tableCourse = {
    displayedColumns: ['name', 'category']
  };

  constructor(
    private service: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.service.findAll();
  }

}
