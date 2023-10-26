import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  readonly courses$: Observable<Course[]>;

  readonly tableCourse = {
    displayedColumns: ['name', 'category', 'actions']
  };

  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute,
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

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }




}
