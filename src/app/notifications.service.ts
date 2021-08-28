import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http : HttpClient) { }
  sendNotificationToAdmin(Data){
    return this.http.post('http://localhost:3000/addNotification',Data)
  }
}
