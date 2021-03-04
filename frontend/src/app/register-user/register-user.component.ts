import { Coach } from './../model/Coach';
import { Address } from './../model/Address';
import { CoachService } from './../services/coach.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInDataCoach } from '../model/SignInDataCoach'
import { Course } from '../model/Course';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  coachData?:Coach | null;
  courses?: Course[];

  constructor(private coachService:CoachService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const signInData = new SignInDataCoach(signInForm.value.email, signInForm.value.password);
    this.coachService.coach_authenticate(signInData);

/*
    console.log("--coach signin-->", this.coachService.coachIsAuthenticated);
    this.coachData = this.coachService.getAuthentificatedCoach(this.coachService.idCoachIsAuthenticated);
    console.log("--coach data-->", this.coachData);
*/


  }

  onSubmitRegistration(userRegistrationForm: NgForm){
    console.log(userRegistrationForm.value);
    const address = new Address(userRegistrationForm.value.clinic_name,
                                userRegistrationForm.value.country, 
                                userRegistrationForm.value.state, 
                                userRegistrationForm.value.city, 
                                userRegistrationForm.value.street);

    const coach = new Coach(0,
                            userRegistrationForm.value.name, 
                            userRegistrationForm.value.email, 
                            userRegistrationForm.value.password, 
                            userRegistrationForm.value.phone, 
                            userRegistrationForm.value.speciality, 
                            address,
                            "url(../assets/defaultProf.png)");

    const signInData = new SignInDataCoach(coach.getEmail(), coach.getPassword());
    this.coachService.onAdd(coach);
    this.coachService.coach_authenticate(signInData);
    console.log("--coach signin-->", this.coachService.coachIsAuthenticated);
  }

}
