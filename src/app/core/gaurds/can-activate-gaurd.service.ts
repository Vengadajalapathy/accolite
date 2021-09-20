import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CommonutilService } from '../../shared/services/commonutil.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGaurdService implements CanActivate {
  constructor(
    private commonUtilService: CommonutilService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = this.commonUtilService.getLoggedIn();
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
    }

    return isLoggedIn;
  }
}
