import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enroll } from './enroll';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public registerUser(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:8080/addUser',user);
  }
  public viewAllUsers():Observable<User[]>{
      return this.http.get<User[]>('http://localhost:8080/viewAllUsers');
  }
  public findUserById(userId:number):Observable<User>{
    return this.http.get<User>('http://localhost:8080/findUserById/'+userId);
  }
  public enrollForCourse(enr:Enroll):Observable<number>{
    return this.http.post<number>('http://localhost:8080/addEnroll',enr);
  }
}
