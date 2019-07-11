import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import * as $ from 'jquery';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  email: string;
  pass: string;
  tipo: string;
  nombre: string;
  apellido: string;
  text: string = "Ocurrio un problema";
  text2: string = "Usuario creado con éxito!";

  constructor(private fire: FirebaseService) { 
  	this.tipo = "1";
  	//$(".alert").removeClass('in out'); 
  }

  ngOnInit() {
  }

  alta(){
    this.fire.crearUsuario(this.email, this.pass).then(response =>{
        console.log(response);
        //var user = this.fauth.auth.currentUser;
        //console.log(user);

        /*
        *   GUARDO USUARIO EN DB
        */
        let tipo: string;
        switch (this.tipo) {
          case "1":
            tipo = "Alumno";
            break;
          case "2":
            tipo = "Profesor";
            break;
          case "3":
            tipo = "Administrador";
            break;
          default:
            tipo = "Alumno";
            break;
        }
        let data = {
          'email': this.email,
          'tipo': tipo,
          'nombre': this.nombre,
          'apellido': this.apellido
        }
        this.fire.guardarUsuario(data).then(response =>{
          this.mostrarAlertOk("Usuario creado con éxito!");
        });
      }).catch(error =>{
        this.mostrarAlert("Ocurrio un error. " + error.message);
      });
  }

  verificarForm(){
  	console.log(this.email);
  	console.log(this.pass);
  	console.log(this.tipo);
  	let response = false;
    // VALIDAR FORMATO DE EMAIL

  	if(this.email != undefined && this.pass != undefined && this.tipo != undefined && this.nombre != undefined && this.apellido != undefined){
  		if(this.pass.length >= 6){
  			response = true;
      }
  		else
  			this.mostrarAlert("La contraseña debe tener por lo menos 6 caractenes");
  	}
  	else{
  		this.mostrarAlert("Faltan campos para rellenar");
  	}
  	return response;
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
