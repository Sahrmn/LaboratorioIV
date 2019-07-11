import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Materias } from '../../clases/materias';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-inscribir-a-materia',
  templateUrl: './inscribir-a-materia.component.html',
  styleUrls: ['./inscribir-a-materia.component.scss']
})
export class InscribirAMateriaComponent implements OnInit {

  materias: Materias[] = [];
  text: string;
  text2: string;
  //@Output() outputMaterias = new EventEmitter();

  constructor(private db: FirebaseService) { 
    this.traerMaterias();

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
      //this.outputMaterias.emit(this.materias);

      });
  }

  inscripcion(item){
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(item);
    
    let data = {
      'materia': item.nombre,
      'nombreAlumno': usuario.nombre,
      'apellidoAlumno': usuario.apellido,
      'emailAlumno': usuario.email,
      'nombreProfesor': item.nombreProfesor,
      'apellidoProfesor': item.apellidoProfesor,
      'idMateria': item.id,
      'cuatrimestre': item.cuatrimestre
    }
    console.log(data);
    
    /*
    * Disminuyo cupo de materia
    */
    //console.log(item.cupo);
    item.cupo = item.cupo - 1;
    //console.log(item.cupo);
    this.db.updateMateria(item);

    this.db.guardarInscripcion(data).then(response =>{
      this.mostrarAlertOk("Inscripción realizada con exito!");
    }).catch(error =>{
      this.mostrarAlert("Ocurrio un error. " + error.message);
    });
    
  }

  

  mostrarAlert(text){
    this.text = text;
    $('#alert-1').fadeIn();
    
    setTimeout(function(){
      $('#alert-1').fadeOut();
    }, 5000);
  }

  mostrarAlertOk(text){
    this.text2 = text;
    $('#alert-2').fadeIn();
    
    setTimeout(function(){
      $('#alert-2').fadeOut();
    }, 5000);
  }



}
