import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  email: string = "email@gmail.com";

  constructor(private db: FirebaseService, private router: Router) { 
  	let usuario = JSON.parse(localStorage.getItem('usuario'));
  	this.email = usuario.email;
  }

  ngOnInit() {
  }

  logout(){
    this.db.logOut();
    this.router.navigate(['login']);
  }

}
