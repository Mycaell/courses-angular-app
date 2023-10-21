import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API: string = '/api/courses';

  constructor(private httpClient: HttpClient) { }

  findById(id: number) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  findAll() {
    return this.httpClient.get<Course[]>(this.API);
  }

  save(course: Partial<Course>) {
    if (course.id) {
      return this.update(course);
    }

    return this.create(course);
  }

  private create(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }

  private update(course: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${course.id}`, course).pipe(first());
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
