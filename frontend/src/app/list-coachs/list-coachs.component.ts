import { UserService } from './../services/user.service';
import { CoachService } from './../services/coach.service';
import { Coach } from './../model/Coach';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-coachs',
  templateUrl: './list-coachs.component.html',
  styleUrls: ['./list-coachs.component.css']
})
export class ListCoachsComponent implements OnInit {
  cards? : Coach[];
  constructor(private userService:UserService, private coachService:CoachService) { }

  ngOnInit(): void {
    this.cards = this.coachService.onGet();
  }

  OnViewProfile(id: string){
    this.userService.OnViewProfile(id);
  }

}
