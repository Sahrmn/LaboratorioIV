import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router }  from '@angular/router';
import { FirebaseService } from './servicios/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  
  authServicio: FirebaseService;
  
  constructor(private router: Router, autoServicio: FirebaseService){
    console.log("en can activate");
    this.authServicio = autoServicio;
  }  

  canActivate(){
    if (this.authServicio.isLogged()){
      console.log("deberia entrar");
      return true;
    } else {
      return false;      
    }
  }
  
}
