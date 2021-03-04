import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-u',
  templateUrl: './home-u.component.html',
  styleUrls: ['./home-u.component.css']
})
export class HomeUComponent implements OnInit {
  idUserIsAuthenticated = this.userService.idUserIsAuthenticated;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("qqqqqqqqqqqqqqqqqqqqqq",this.idUserIsAuthenticated);
  }

}
