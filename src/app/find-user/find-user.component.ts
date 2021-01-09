import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  user = new User();
  showUser: boolean = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  public findUser() {
    this.showUser = true;
    this._userService.findUserById(this.user.userId).subscribe(
      data => {
        if (data == null) {
          console.log("Invalid User Id");
          this.showUser = false;
        } else {
          console.log(JSON.stringify(data));
          this.user = data;
        }
      }
    );
  }
}
