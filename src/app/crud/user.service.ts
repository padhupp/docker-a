import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  //baseUrl: string = 'http://172.17.12.140:8080/Details/Users';
  baseUrl: string = 'http://172.17.12.170:8080/Details/Users';
  user2:User = { id: 1, email: "seshu124@gmail.com", firstName: "Seshu", lastName: "mandava" }
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    //console.log("in service"+JSON.stringify(user));
    return this.http.put(this.baseUrl + '/' + user.id,user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
