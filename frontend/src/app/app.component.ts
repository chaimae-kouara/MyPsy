import { CoachService } from './services/coach.service';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  idCoachIsAuthenticated:string = this.coachAuthenticationService.idCoachIsAuthenticated;
  idUserIsAuthenticated:string = this.userAuthenticationService.idUserIsAuthenticated;

  constructor(public coachAuthenticationService: CoachService,
              public userAuthenticationService: UserService) { }


  logoutCoach(id: string){
    this.coachAuthenticationService.logout(id);
  }
  
  logoutUser(id: string){
    this.userAuthenticationService.logout(id);
  }

}

