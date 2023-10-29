import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, Observable, of } from 'rxjs';

import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';
import { CoursesRoutes } from '../../courses-routes';


@Component({
  selector: 'app-course-house',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})
export class CourseHomeComponent {

  courses$: Observable<Course[]> | null = null;

  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.getCourses();
  }

  getCourses() {
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
    this.router.navigate([CoursesRoutes.CREATE], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    const editRoute = CoursesRoutes.EDIT.replace(':id', String(course.id));

    this.router.navigate([editRoute], { relativeTo: this.route });
  }


}
