import { Course } from './../model/Course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [
    new Course("title1", "url1", "url(../assets/x1.jfif)"),
    new Course("title2", "url2", "url(../assets/x2.jfif)"),
    new Course("title3", "url3", "url(../assets/x1.jfif)"),
    new Course("title4", "url4", "url(../assets/x2.jfif)")
  ]

  constructor() { }

  onGet(){
    return this.courses;
  }
}
