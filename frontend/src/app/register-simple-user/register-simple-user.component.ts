import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-register-simple-user',
  templateUrl: './register-simple-user.component.html',
  styleUrls: ['./register-simple-user.component.css']
})
export class RegisterSimpleUserComponent implements OnInit {
  //emialPattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }



  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const user = new User(signInForm.value.nickname, signInForm.value.password);
    this.userService.user_authenticate(user);
    console.log("---->", this.userService.userIsAuthenticated);
  }

  onSubmitRegistration(userRegistrationForm: NgForm){
    //console.log(userRegistrationForm.value);
    const user = new User(userRegistrationForm.value.nickname, userRegistrationForm.value.password);
    this.userService.onAdd(user);
    this.userService.user_authenticate(user);
    console.log("--registration-->", this.userService.userIsAuthenticated);
  }
  
}
