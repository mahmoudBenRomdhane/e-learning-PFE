import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  currentUser = {
    name : '',
    email : '',
    password : ''
  }
}
