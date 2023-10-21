import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';

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
    this.courses$ = this.service.findAll().pipe(
      catchError((error) => {
        this.openDialogError('ocorreu um erro ao carregar os cursos.');
        return of([]);
      }));
  }

  openDialogError(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: message,
    });
  }
}
