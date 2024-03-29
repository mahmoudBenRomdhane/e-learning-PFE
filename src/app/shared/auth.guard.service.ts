import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApprenantService } from "./apprenant.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private Apprenantservice: ApprenantService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.Apprenantservice.getIsAuth()
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
