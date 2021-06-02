import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { ApprenantService } from './apprenant.service';
@Injectable(
  
)
export class AuthIntercptorService implements HttpInterceptor {

  constructor(private apprenantService : ApprenantService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.apprenantService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
