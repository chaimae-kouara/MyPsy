import { Course } from './../model/Course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  coachCourses?:Course[];

  courses: Course[] = [
    new Course("3", "1", "personal development training session 1", "https://www.linkup-coaching.com/"),
    new Course("4", "1", "personal development training session 2", "https://www.linkup-coaching.com/"),
    new Course("1", "2", "title3", "url3"),
    new Course("2", "2", "title4", "url4")
  ]

  constructor() { }

  onGet(){
    return this.courses;
  }
}

