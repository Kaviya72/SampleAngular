import { Component, OnInit } from '@angular/core';
import { Enroll } from '../enroll';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enr = new Enroll();
  success:boolean=false;
  regNo:number;
  rDate:Date;
  constructor(private userService:UserService) { }

  ngOnInit() :void{
  }
  public enrollment(){
    this.enr.enrollmentDate=this.rDate.toString();
    this.userService.enrollForCourse(this.enr).subscribe(
      data=>{
        if(data!=null){
        this.success=true;
        this.regNo=data;
        }
      }
    );
  }
}
