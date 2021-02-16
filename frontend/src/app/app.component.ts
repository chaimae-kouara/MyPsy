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


  
  constructor(public coachAuthenticationService: CoachService,
              public userAuthenticationService: UserService) { }
  
}

