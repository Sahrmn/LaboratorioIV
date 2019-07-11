import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-alta-materias',
  templateUrl: './alta-materias.component.html',
  styleUrls: ['./alta-materias.component.scss']
})
export class AltaMateriasComponent implements OnInit {

  nombre: string;
  cuatrimestre: string = "1C";
  cupo: number;
  profesor: any;
  profesores: Profesor[] = [];
  text: string;
  text2: string;

  constructor(private db: FirebaseService) { 
  	this.traerMaterias();
  }

  ngOnInit() {
  }

  traerMaterias(){
  	//traer profesores
  	this.db.getUsuarios().subscribe(lista =>{
  		this.profesores = [];
  		lista.forEach((data: any) => {
  			//console.log(data.payload.doc.data().apellido);
        if(data.payload.doc.data().tipo == "Profesor"){
    			this.profesores.push({
    				id: data.payload.doc.id,
    				nombre: data.payload.doc.data().nombre,
    				apellido: data.payload.doc.data().apellido
    			});
        }
  		});
  		console.log(this.profesores);

  	});
  }

  alta(){
  	if(this.verificar()){
  		this.nombre.toLowerCase();
  		this.nombre[0].toUpperCase();
  		for (var i = this.profesores.length - 1; i >= 0; i--) {
  			if(this.profesores[i].id == this.profesor){
  				this.profesor = this.profesores[i];
  			}
  		}
  		//console.log(this.profesor);
  		let data = {
  			'nombre': this.nombre,
  			'cuatrimestre': this.cuatrimestre,
  			'cupo': this.cupo,
  			'nombreProfesor': this.profesor.nombre,
  			'apellidoProfesor': this.profesor.apellido,
  		}
  		console.log(data);
  		this.db.guardarMateria(data).then(response =>{
  			this.mostrarAlertOk("Materia agregada con exito!");
  		});
  	}
  }

  verificar(): boolean{
  	let retorno = false;
  	console.log(this.nombre);
  	console.log(this.cuatrimestre);
  	console.log(this.cupo);
  	console.log(this.profesor);
  	if(this.nombre != undefined && this.cuatrimestre != undefined && this.cupo != undefined && this.profesor != undefined){
  		if(this.cupo > 0){
  			retorno = true;
  		}
  		else{
  			this.mostrarAlert("El cupo debe ser mayor a 0 alumnos");
  		}
  	}
  	else{
  		this.mostrarAlert("Hay campos sin completar");
  	}
  	return retorno;
  }

  mostrarAlert(text){
    this.text = text;
    $('#alert-1').fadeIn();
    
    setTimeout(function(){
      $('#alert-1').fadeOut();
    }, 3000);
  }

  mostrarAlertOk(text){
    this.text2 = text;
    $('#alert-2').fadeIn();
    
    setTimeout(function(){
      $('#alert-2').fadeOut();
    }, 3000);
  }

}
