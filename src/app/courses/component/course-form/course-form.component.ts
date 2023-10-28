import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, Observable, of } from 'rxjs';


import { InfoDialogComponent } from 'src/app/shared/component/info-dialog/info-dialog.component';
import { CourseService } from '../../service/course.service';
import { SelectItem } from '../../model/select-item';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form!: FormGroup;

  readonly categories$: Observable<SelectItem[]>;

  constructor(
    private formBuilder: FormBuilder,
    private service: CourseService,
    private snackBar: MatSnackBar,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.maxLength(200), Validators.required]],
      category: [null, [Validators.maxLength(10), Validators.required]],
    });

    this.categories$ = this.service.getCategories().pipe(
      catchError((error) => {
        this.openDialogError('ocorreu um erro ao carregar as categorias.');
        return of([]);
      }));
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: () => {
        this.onError();
      },
    });
  }

  private backPage() {
    this.location.back();
  }

  onCancel() {
    this.backPage();
  }

  private showSnackBar(msg: string) {
    this.snackBar.open(msg, '', { duration: 7000 });
  }

  private onSuccess() {
    this.showSnackBar("Curso salvo com sucesso!");
    this.backPage();
  }

  private onError() {
    this.showSnackBar("Erro ao salvar curso.");
  }

  openDialogError(message: string) {
    this.dialog.open(InfoDialogComponent, {
      data: message,
    });
  }

}
