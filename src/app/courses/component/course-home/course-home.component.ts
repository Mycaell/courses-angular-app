import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, Observable, of } from 'rxjs';

import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';
import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';
import { CoursesRoutes } from '../../courses-routes';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';
import { ToastService } from './../../../shared/service/toast.service';


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
    public dialog: MatDialog,
    private toastService: ToastService
  ) {
    this.getCourses();
  }

  getCourses() {
    this.courses$ = this.service.findAll().pipe(
      catchError((error) => {
        this.openDialogError('Ocorreu um erro ao carregar os cursos.');
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

  onDelete(course: Course) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.service.delete(course.id ?? 0).subscribe({
          next: () => {
            this.getCourses();
            this.toastService.open("Curso removido.", 'success');
          },
          error: () => {
            this.openDialogError("Ocorreu um erro ao tentar remover o curso.");
          }
        });
      }
    });
  }

}
