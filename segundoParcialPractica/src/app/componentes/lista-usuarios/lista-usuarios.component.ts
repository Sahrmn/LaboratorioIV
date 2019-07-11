import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  private tipo: string;
  //@Input() public myTipo: string = "todos";
  @Input('myTipo')
  set name(name: string){
    this.tipo = name;
    this.mostrarPorTipo();
  }

  constructor(private fire: FirebaseService) { 
    
  }

  ngOnInit() {
    
  }

  traerUsuarios(tipo){
  	this.fire.getUsuarios().subscribe(lista =>{
  		this.usuarios = [];
      console.log("tipo pasado: " + this.tipo);
  		lista.forEach((data: any) => {
  			//console.log(data.payload.doc.data().apellido);
        if(data.payload.doc.data().tipo == tipo || tipo == "todos"){
    			this.usuarios.push({
    				id: data.payload.doc.id,
    				nombre: data.payload.doc.data().nombre,
    				apellido: data.payload.doc.data().apellido,
    				email: data.payload.doc.data().email,
    				clave: data.payload.doc.data().clave,
    				tipo: data.payload.doc.data().tipo
    			});
        }
  		});
  		console.log(this.usuarios);

  	});

  }

  mostrarPorTipo(){
    switch (this.tipo) {
      case "todos":
      default:
        this.traerUsuarios("todos");
        break;
      case "alumno":
        this.traerUsuarios("Alumno");
        break;
      case "profesor":
        this.traerUsuarios("Profesor");
        break;
      case "administrador":
        this.traerUsuarios("Administrador");
        break;
    }
  }

}
