import { CourseService } from './../services/course.service';
import { Component } from '@angular/core';
import { Course } from '../model/Course';
import { CoachService } from '../services/coach.service';
import { Coach } from '../model/Coach';
import { Address } from '../model/Address';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent {
  cards?: Course[];
  idAuthentificatedCoach = this.coachService.idCoachIsAuthenticated;
  coachData!:Coach;
  coursesAuthentificatedCoach:any;

  constructor(private courseService: CourseService, private coachService:CoachService) {}

  ngOnInit(): void{
    this.cards = this.courseService.onGet();

    console.log("--coach signin-->", this.coachService.coachIsAuthenticated);
    this.coachService.getAuthentificatedCoach(this.idAuthentificatedCoach);
    this.coachData = this.coachService.dataCoachIsAuthenticated!;

    this.coachService.getCoursesOfCoach(this.idAuthentificatedCoach);
    this.coursesAuthentificatedCoach = this.coachService.coursesAuthentificatedCoach;
    console.log("this.coursesAuthentificatedCoach-->",this.coursesAuthentificatedCoach);

    console.log("--coach data-->", this.coachData);
  }

  onSubmit(addCourseForm: NgForm){
    console.log("cccccccccccccccc",addCourseForm.value);
    const course = new Course(0,
                              this.idAuthentificatedCoach,
                              addCourseForm.value.title, 
                              addCourseForm.value.url);

                              console.log("ddddddddddddddddddd",course);
    this.coachService.onAddCourseToCoach(course);
    this.coachService.getCoursesOfCoach(this.idAuthentificatedCoach);
    this.coursesAuthentificatedCoach = this.coachService.coursesAuthentificatedCoach;
  }


  OnDeleteCourse(id:number){
    this.coachService.OnDeleteCourse(id, this.idAuthentificatedCoach);
  }
  
}




