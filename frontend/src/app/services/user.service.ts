import { CoachService } from './coach.service';
import { User } from '../model/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInDataUser } from '../model/SignInDataUser';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userIsAuthenticated = false;
  idUserIsAuthenticated: any;
  idSelectedCoach: any;
  coachSelected:any;

  coursesSelectedCoach:Course[] = [];

  dataUsers: User[] = [
    new User(1, "1", "111111"),
    new User(2, "2", "222222"),
    new User(3, "3", "333333")
  ]
  
  constructor(private router: Router, private coachService:CoachService) { }

  user_authenticate(user: SignInDataUser): boolean {
    if (this.checkCredentials(user)) {
      this.userIsAuthenticated = true;
      //this.router.navigate(['homeu']);
      this.router.navigate(['homeu/',this.idUserIsAuthenticated]);
      return true;
    }
    this.userIsAuthenticated = false;
    return false;
  }


  logout(id: Number){
    this.userIsAuthenticated = false;
    this.router.navigate(['user/']);
  }


  private checkCredentials(user: SignInDataUser): boolean {
    for(var u of this.dataUsers){
      if(user.getNickname() === u.getNickname() && u.getPassword() === user.getPassword()){
        this.idUserIsAuthenticated = u.getId();
        return true;
      }
    }
    return false
  }



  onAdd(user: User){
    this.dataUsers.push(user);
    console.log("-->onAdd", this.dataUsers);
  }


  OnViewProfile(id: Number){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",this.coachService.coaches);
    
    for(var c of this.coachService.coaches){
      if(id == c.getId()){
        console.log("hayiiiiiiiiiiiiiiii", c);
        this.idSelectedCoach = id;
        this.router.navigate(['coachU/',id]);
      }
    }
    
  }



  getCoursesOfCoachSelected(id:Number){
    this.coursesSelectedCoach = [];
    for(var c of this.coachService.courses1){
      if(id == c.getIdCoach()){
          this.coursesSelectedCoach?.push(c);
      }
    }
  }


  getSelectedCoach(id: any){
    for(var c of this.coachService.coaches){
      if(id == c.getId()){
        this.coachSelected = c;
      }
    }
  }


}
