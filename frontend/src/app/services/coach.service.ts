import { Address } from './../model/Address';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from '../model/Coach';
import { SignInDataCoach } from '../model/SignInDataCoach';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  
  addresses: Address[] = [
    new Address("clinic1","country1","state1","city1","street1"),
    new Address("clinic2","country2","state2","city2","street2"),
    new Address("clinic3","country3","state3","city3","street3")
  ];

  courses1: Course[] = [
    new Course("3", "1", "personal development training session 1", "https://www.linkup-coaching.com/"),
    new Course("4", "1", "personal development training session 2", "https://www.linkup-coaching.com/"),
    new Course("1", "2", "title3", "url3"),
    new Course("2","1", "title4", "url4")
  ]

  coaches: Coach[] = [
    new Coach("1", "1", "@1", "111111", "spe1", "spe1", this.addresses[0],'https://bootdey.com/img/Content/avatar/avatar1.png'),
    new Coach("2", "2", "@2", "222222", "spe2", "spe2", this.addresses[1], 'https://bootdey.com/img/Content/avatar/avatar2.png'),
    new Coach("3", "4", "@4", "333333", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar3.png'),
    new Coach("5", "5", "@5", "113", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar4.png'),
    new Coach("6", "6", "@6", "113", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar5.png')
  ];


  private readonly mockUser: SignInDataCoach = new SignInDataCoach('coach', 'xxxxxx');
  coachIsAuthenticated = false;
  idCoachIsAuthenticated: any;
  dataCoachIsAuthenticated?: Coach;
  coursesAuthentificatedCoach?:Course[] = [];

  
  constructor(private router: Router) { }

  coach_authenticate(coach: SignInDataCoach): boolean {
    if (this.checkCredentials(coach)) {
      this.coachIsAuthenticated = true;
      this.router.navigate(['homec/',this.idCoachIsAuthenticated]);
      return true;
    }
    this.coachIsAuthenticated = false;
    return false;
  }

  logout(id: string){
    this.coachIsAuthenticated = false;
    this.router.navigate(['coach/']);
  }









  private checkCredentials(coach: SignInDataCoach): boolean {
    for(var c of this.coaches){
      if(coach.getEmail() === c.getEmail() && coach.getPassword() === c.getPassword()){
        this.idCoachIsAuthenticated = c.getId();
        return true;
      } 
    }
    return false
  }
  
  onGet(){
    return this.coaches;
  }

  onAdd(coach: Coach){
    this.addresses.push(coach.getAddress());
    this.coaches.push(coach);
  }

  getAuthentificatedCoach(id: any){
    for(var c of this.coaches){
      if(id == c.getId()){
        this.dataCoachIsAuthenticated = c;
      }
    }
  }



  onAddCourseToCoach( course: Course){

    if(!this.courses1.includes(course)){
      this.courses1.push(course);
    }
  }


  OnDeleteCourse(idCourse:string, idCoach:string){
    if(this.coursesAuthentificatedCoach)
    for(var c of this.coursesAuthentificatedCoach){
      if(idCourse == c.getId()){
        let index = this.courses1.indexOf(c, 0);
        this.courses1.splice(index, 1);    
        let index2 = this.coursesAuthentificatedCoach.indexOf(c, 0);
        this.coursesAuthentificatedCoach.splice(index2, 1);     
      }
    }
    
    console.log("dddiiiiiiiiiiiiiiiiiiiiiiiiiii", this.courses1);
  }



  getCoursesOfCoach(id:string){
    for(var c of this.courses1){
      if(id == c.getIdCoach()){
        if(!this.coursesAuthentificatedCoach?.includes(c)){
          this.coursesAuthentificatedCoach?.push(c);
        }
      }
    }
  }

}
