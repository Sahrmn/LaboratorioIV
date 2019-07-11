import { Component, OnInit, Input } from '@angular/core';
import { Materias } from '../../clases/materias';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.scss']
})
export class ListaMateriasComponent implements OnInit {

  materias: Materias[] = [];
  @Input() public modo: string;
  @Input() public nombre: string;
  @Input() public apellido: string;

  constructor(private db: FirebaseService) { 
  	this.db.getMaterias().subscribe(lista =>{
  		this.materias = [];
  		lista.forEach((data: any) => {
  			//console.log(data.payload.doc.data().apellido);
  			this.materias.push({
  				id: data.payload.doc.id,
  				nombre: data.payload.doc.data().nombre,
  				apellidoProfesor: data.payload.doc.data().apellidoProfesor,
  				cuatrimestre: data.payload.doc.data().cuatrimestre,
  				cupo: data.payload.doc.data().cupo,
  				nombreProfesor: data.payload.doc.data().nombreProfesor
  			});
  		});
  		console.log(this.materias);
      if(this.modo == 'profesor'){
        console.log(this.nombre + " " + this.apellido);
        this.filtrarPorProfesor(this.nombre, this.apellido);
      }
  	});
  }

  ngOnInit() {
  }

  filtrarPorProfesor(nombre, apellido){
    this.materias = this.materias.filter(function(item){
      return item.nombreProfesor == nombre && item.apellidoProfesor == apellido;
    });
  }

}
