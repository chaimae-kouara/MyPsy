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
  idCoachIsAuthenticated:Number = this.coachAuthenticationService.idCoachIsAuthenticated;
  idUserIsAuthenticated:Number = this.userAuthenticationService.idUserIsAuthenticated;

  constructor(public coachAuthenticationService: CoachService,
              public userAuthenticationService: UserService) { }


  logoutCoach(id: Number){
    this.coachAuthenticationService.logout(id);
  }
  
  logoutUser(id: Number){
    this.userAuthenticationService.logout(id);
  }

}

