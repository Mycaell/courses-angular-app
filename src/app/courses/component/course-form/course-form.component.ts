import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { catchError, Observable, of } from 'rxjs';

import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';
import { SelectItem } from '../../model/select-item';
import { CourseService } from '../../service/course.service';
import { Course } from './../../model/course';
import { ToastService } from 'src/app/shared/service/toast.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form!: FormGroup;
  categories$: Observable<SelectItem[]> | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: CourseService,
    private snackBar: MatSnackBar,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.createForm();
    this.getCategories();
  }

  createForm() {
    const course: Course = this.route.snapshot.data['course'];

    this.form = this.formBuilder.group({
      id: [course.id],
      name: [course.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      category: [course.category, [Validators.required]]
    });
  }

  getCategories() {
    this.categories$ = this.service.getCategories().pipe(
      catchError((error) => {
        this.openDialogError('Ocorreu um erro ao carregar as categorias.');
        return of([]);
      })
    );
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      }
    });
  }

  onCancel() {
    this.backPage();
  }

  private backPage() {
    this.location.back();
  }

  private onSuccess() {
    this.toastService.open("Curso salvo.", 'success');
    this.backPage();
  }

  private onError() {
    this.toastService.open("Ocorreu um erro ao salvar o curso.", 'error');
  }

  openDialogError(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: message,
    });
  }

}
