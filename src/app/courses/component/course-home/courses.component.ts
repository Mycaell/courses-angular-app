import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, Observable, of } from 'rxjs';

import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]> | null = null;

  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.refresh();
  }

  refresh() {
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
