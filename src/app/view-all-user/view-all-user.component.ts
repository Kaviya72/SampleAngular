import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {
  users = [];
  showUsers: boolean = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.viewUsers();
  }
  public viewUsers() {​​
    this.showUsers = true;
    this._userService.viewAllUsers().subscribe(
      data=> {​​
        if (data == null) {​​
          console.log("No Users registered");
          this.showUsers = false;
        }​​ else {​​
          console.log(JSON.stringify(data));
          this.users = data;
        }​​
      }​​
    );
  }​​
}
