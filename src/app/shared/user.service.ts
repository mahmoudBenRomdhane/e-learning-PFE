import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAdmin = false 
  constructor() { }

  setAdmin(user){
    this.isAdmin = user
  }
  getUser(){
    return this.isAdmin
  }
}
