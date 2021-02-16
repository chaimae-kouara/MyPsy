import { User } from '../model/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dataUsers: User[] = [
    new User("1", "111111"),
    new User("2", "222222"),
    new User("3", "333333")
  ]
  userIsAuthenticated = false;
  
  constructor(private router: Router) { }

  user_authenticate(user: User): boolean {
    if (this.checkCredentials(user)) {
      this.userIsAuthenticated = true;
      this.router.navigate(['homeu']);
      return true;
    }
    this.userIsAuthenticated = false;
    return false;
  }

  private checkCredentials(user: User): boolean {
    for(var u of this.dataUsers){
      if(user.getNickname() === u.getNickname() && u.getPassword() === user.getPassword()) return true;
    }
    return false
  }

  onAdd(user: User){
    this.dataUsers.push(user);
    console.log("-->onAdd", this.dataUsers);
  }

}
