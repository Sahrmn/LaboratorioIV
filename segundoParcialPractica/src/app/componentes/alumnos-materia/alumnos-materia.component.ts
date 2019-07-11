import { Component, OnInit } from '@angular/core';
import { Materias } from '../../clases/materias';
import { FirebaseService } from '../../servicios/firebase.service';
import { Inscripcion } from '../../clases/inscripcion';

@Component({
  selector: 'app-alumnos-materia',
  templateUrl: './alumnos-materia.component.html',
  styleUrls: ['./alumnos-materia.component.scss']
})
export class AlumnosMateriaComponent implements OnInit {

  materia: string;
  materias: Materias[] = [];
  inscripciones: Inscripcion[] = [];
  nombre: string;
  apellido: string;
  inscripcionAlumno: any[] = [];

  constructor(private db: FirebaseService) { 
  	let usuario = JSON.parse(localStorage.getItem('usuario'));
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    console.log(this.nombre);
    console.log(this.apellido);
    this.traerMaterias();
    this.traerInscripciones();
  }

  ngOnInit() {
  }

  traerMaterias(){
  	this.db.getMaterias().subscribe(lista =>{
  		this.materias = [];

  		lista.forEach((data: any) => {
  			//console.log(data.payload.doc.data());
        this.materias.push({
          id: data.payload.doc.id,
          nombre: data.payload.doc.data().nombre,
          apellidoProfesor: data.payload.doc.data().apellidoProfesor,
          cuatrimestre: data.payload.doc.data().cuatrimestre,
          cupo: data.payload.doc.data().cupo,
          nombreProfesor: data.payload.doc.data().nombreProfesor
        });
  		});
  		console.table(this.materias);
      });
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
      //console.log(this.inscripciones);
      this.mostrarAlumnos();
    });
  }

  mostrarAlumnos(){
    //console.table(this.inscripciones);
    for (var i = this.inscripciones.length - 1; i >= 0; i--) {
      /*console.log(this.apellido + this.inscripciones[i].apellidoProfesor);
      console.log(this.nombre + this.inscripciones[i].nombreProfesor);
      console.log(this.inscripciones[i].materia);
      */
      console.log(this.materia);
      if(this.apellido == this.inscripciones[i].apellidoProfesor && this.nombre == this.inscripciones[i].nombreProfesor && this.materia == this.inscripciones[i].materia){
        console.log("en el if");
        this.inscripcionAlumno.push(this.inscripciones[i]);
      }
    }
    console.log(this.inscripcionAlumno);
    this.inscripcionAlumno = this.inscripcionAlumno.map(function(i){
      let data = {
        'nombreAlumno': i.nombreAlumno,
        'apellidoAlumno': i.apellidoAlumno,
        'cuatrimestre': i.cuatrimestre
      }
      return data;
    });

    console.log(this.inscripcionAlumno);
  }

  seleccionMateria(){
    this.inscripcionAlumno = [];
    this.mostrarAlumnos();
  }


}
