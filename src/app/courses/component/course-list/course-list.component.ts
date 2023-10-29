import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  @Input() courses: Course[] = [];

  @Output() readonly add: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() readonly edit: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() readonly delete: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly tableCourse = {
    displayedColumns: ['name', 'category', 'actions']
  };

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }

  onDelete() {
    this.delete.emit(true);
  }

}
