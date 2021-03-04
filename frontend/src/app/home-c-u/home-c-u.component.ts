import { Component, OnInit } from '@angular/core';
import { CourseService } from './../services/course.service';
import { Course } from '../model/Course';
import { CoachService } from '../services/coach.service';
import { Coach } from '../model/Coach';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-c-u',
  templateUrl: './home-c-u.component.html',
  styleUrls: ['./home-c-u.component.css']
})

export class HomeCUComponent {
  idSelectedCoach = this.userService.idSelectedCoach;
  coachData!:Coach;
  coursesSelectedCoach:any;
  //coachSelected:any;




  constructor(private userService: UserService, private coachService:CoachService) {}

  ngOnInit(): void{


    this.userService.getCoursesOfCoachSelected(this.idSelectedCoach);
    this.coursesSelectedCoach = this.userService.coursesSelectedCoach;
    console.log("this.coursesSelectedCoach-->",this.userService.coursesSelectedCoach);
    console.log("this.coursesSelectedCoach-->",this.coursesSelectedCoach);



    this.userService.getSelectedCoach(this.idSelectedCoach);
    if(this.userService.coachSelected)
    this.coachData = this.userService.coachSelected;
    console.log("--coach data-->", this.userService.coachSelected);
  }

  
}




