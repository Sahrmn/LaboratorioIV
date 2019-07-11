import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';
import { Inscripcion } from '../../clases/inscripcion';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.scss']
})
export class ListaInscripcionesComponent implements OnInit {

  inscripciones: Inscripcion[] = [];
  alumnos: Usuario[] = [];
  @Input() profesor: any;
  @Input() materia: string;

  constructor(private db: FirebaseService) { 
  	this.traerInscripciones();
  }

  ngOnInit() {
    /*if(this.materia != undefined){
      this.mostrarAlumnos();
    }*/
  }

  traerInscripciones(){
  	this.db.getInscripciones().subscribe(lista =>{
  		this.inscripciones = [];
  		lista.forEach((data: any) => {
  			//console.log(data.payload.doc.data().apellido);
  			this.inscripciones.push({
  				id: data.payload.doc.id,
          materia: data.payload.doc.data().materia,
  				nombreAlumno: data.payload.doc.data().nombreAlumno,
  				apellidoAlumno: data.payload.doc.data().apellidoAlumno,
  				emailAlumno: data.payload.doc.data().emailAlumno,
  				nombreProfesor: data.payload.doc.data().nombreProfesor,
  				apellidoProfesor: data.payload.doc.data().apellidoProfesor,
  				cuatrimestre: data.payload.doc.data().cuatrimestre,
  				idMateria: data.payload.doc.data().idMateria,
  			});
  		});
  		console.log(this.inscripciones);

  	});
  }
/*
  mostrarAlumnos(){
    let alumnos = this.inscripciones.filter(function(item){
      return this.profesor.apellido == item.apellidoProfesor && this.profesor.nombre == item.nombreProfesor && this.materia == item.materia;
    }).map(function(i){
      let data = {
        'nombreAlumno': i.nombreAlumno,
        'apellidoAlumno': i.apellidoAlumno,
        'cuatrimestre': i.cuatrimestre
      }
      return data;
    });
  }
*/


}
