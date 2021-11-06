import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthorizationService } from '../servicios/authorization.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthorizationService,  private router:Router){

  }
  canActivate():boolean{
    if(!this.authService.isAuth()){
      alert("No tiene permiso para acceder");
      this.router.navigateByUrl("");
      return false;
    }
    return true;
  }
  
}
