import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.scss']
})
export class HomeProfesorComponent implements OnInit {

  nombre: string;
  apellido: string;

  constructor() { 
  	let usuario = JSON.parse(localStorage.getItem('usuario'));
  	this.nombre = usuario.nombre;
  	this.apellido = usuario.apellido;
  	console.log(usuario);
  }

  ngOnInit() {
  }

}
