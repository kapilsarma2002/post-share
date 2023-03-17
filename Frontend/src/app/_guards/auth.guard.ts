import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router : Router
  ) {}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log('CanActivate called');

    let isLoggedIn = this.storageService.isLoggedIn();
    console.log('Is LoggedIn : ')
    console.log(isLoggedIn);

    if(isLoggedIn === true) return true;
    this.router.navigate(['/signup']);
    return false;

  }

  // canLoad( route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   console.log('CanLoad called');

  //   let isLoggedIn = this.storageService.isLoggedIn();
  //   console.log('Is LoggedIn : ')
  //   console.log(isLoggedIn);

  //   if(isLoggedIn === true) return true;
  //   this.router.navigate(['/signup']);
  //   return false;
  // }
}
