import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];

  @Output() readonly add: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() readonly edit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() readonly delete: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly tableCourse = {
    displayedColumns: ['name', 'category', 'actions']
  };

  onAdd() {
    this.add.emit(true);
  }

  onEdit() {
    this.edit.emit(true);
  }

  onDelete() {
    this.delete.emit(true);
  }

}
