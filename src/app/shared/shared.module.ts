import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { InfoDialogComponent } from './component/info-dialog/info-dialog.component';
import { CategoryPipe } from './pipe/category.pipe';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';


const angularModules: any = [CommonModule, RouterModule];

const materialModules: any = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
];


@NgModule({
  declarations: [
    InfoDialogComponent,
    CategoryPipe,
    ConfirmDialogComponent
  ],
  imports: [
    angularModules, materialModules
  ],
  exports: [
    angularModules,
    materialModules,
    InfoDialogComponent,
    CategoryPipe,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
