import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../model/Address';
import { Coach } from '../model/Coach';
import { SignInDataCoach } from '../model/SignInDataCoach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  
  addresses: Address[] = [
    new Address("clinic1","country1","state1","city1","street1"),
    new Address("clinic2","country2","state2","city2","street2"),
    new Address("clinic3","country3","state3","city3","street3")
  ];

  coaches: Coach[] = [
    new Coach("1", "@1", "111111", "spe1", "spe1", this.addresses[0],'https://bootdey.com/img/Content/avatar/avatar1.png'),
    new Coach("2", "@2", "222222", "spe2", "spe2", this.addresses[1], 'https://bootdey.com/img/Content/avatar/avatar2.png'),
    new Coach("4", "@4", "333333", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar3.png'),
    new Coach("5", "@5", "113", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar4.png'),
    new Coach("6", "@6", "113", "spe3", "spe3", this.addresses[2], 'https://bootdey.com/img/Content/avatar/avatar5.png')
  ];


  private readonly mockUser: SignInDataCoach = new SignInDataCoach('coach', 'xxxxxx');
  coachIsAuthenticated = false;
  
  constructor(private router: Router) { }

  coach_authenticate(coach: SignInDataCoach): boolean {
    if (this.checkCredentials(coach)) {
      this.coachIsAuthenticated = true;
      this.router.navigate(['homec']);
      return true;
    }
    this.coachIsAuthenticated = false;
    return false;
  }


  private checkCredentials(coach: SignInDataCoach): boolean {
    for(var c of this.coaches){
      if(coach.getEmail() === c.getEmail() && coach.getPassword() === c.getPassword()) return true;
    }
    return false
  }
  
  onGet(){
    return this.coaches;
  }

  onAdd(coach: Coach){
    this.addresses.push(coach.getAddress());
    console.log("-->onAdd address", this.addresses);
    this.coaches.push(coach);
    console.log("-->onAdd coach", this.coaches);

  }


}
