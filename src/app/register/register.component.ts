import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // user:User;
  user = new User();
  private _userService:UserService;
  constructor(private userService:UserService) { 
    this._userService=userService;
  }

  ngOnInit() {
  }
  public registerUser(){
    this._userService.registerUser(this.user).subscribe(
      data=>{
        console.log(data);
      }
    );
  }
}
