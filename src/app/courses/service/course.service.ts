import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { first } from 'rxjs/operators';

import { Course } from '../model/course';
import { SelectItem } from '../model/select-item';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

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

  delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  getCategories() {
    return this.httpClient.get<SelectItem[]>(`${this.API}/categories`);
  }

}
