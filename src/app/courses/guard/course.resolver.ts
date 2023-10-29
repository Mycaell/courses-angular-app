import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CourseService } from '../service/course.service';

export const courseResolver: ResolveFn<Course> = (
  route,
  state,
  service: CourseService = inject(CourseService)): Observable<Course> => {

  if (route.params && route.params['id']) {
    return service.findById(route.params['id']);
  }

  return of({ id: null, name: '', category: '' });
};
