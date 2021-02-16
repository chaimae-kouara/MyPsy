import { CourseService } from './../services/course.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Course } from '../model/Course';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent {
  cards?: Course[];
  constructor(private courseService:CourseService) {}

  ngOnInit(): void{
    this.cards = this.courseService.onGet();
  }
}
