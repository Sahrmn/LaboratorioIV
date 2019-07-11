import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.scss']
})
export class HomeAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recibirMaterias(e){
  	console.log("recibo materias por output");
  	console.log(e);
  }

}
