import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FirebaseService } from '../../servicios/firebase.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  text: string;
  text2: string;
  email: string;
  pass: string;

  constructor(private fire: FirebaseService, public router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.verificar()){
        this.fire.login(this.email, this.pass);
        //this.router.navigate(['home']);
        this.traerTipoUsuario();
    }
  }

  traerTipoUsuario(){
    let retornoTipo = "";
    this.fire.getUsuarios().subscribe(lista =>{
      lista.forEach((data: any) => {
        //console.log(data.payload.doc.data().apellido);
        if(data.payload.doc.data().email == this.email){
          //guardo en localstorage
          let datos = {
            'nombre': data.payload.doc.data().nombre,
            'apellido': data.payload.doc.data().apellido,
            'email': this.email,
            'tipo': data.payload.doc.data().tipo
          }
          localStorage.setItem('usuario', JSON.stringify(datos));
          
          retornoTipo = data.payload.doc.data().tipo;
          switch (retornoTipo) {
            case "Administrador":
              this.router.navigate(['home/admin']);
              break;
            case "Alumno":
              this.router.navigate(['home/user']);
              break;
            case "Profesor":
              this.router.navigate(['home/profesor']);
              break;
            default:
              // code...
              break;
          }
        }
      });
    });
  }

  verificar(): boolean{
    let retorno: boolean = false;
    console.log(this.email);
    console.log(this.pass);
    if(this.email != undefined && this.pass != undefined){
      retorno = true;
    }
    else{
      this.mostrarAlert("Faltan campos para rellenar")
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

  entrarAlumno(){
    this.email = "prueba1@gmail.com";
    this.pass = "prueba1";
  }

  entrarProfesor(){
    this.email = "profesor@gmail.com";
    this.pass = "profesor";
  }

  entrarAdmin(){
    this.email = "admin@gmail.com";
    this.pass = "admin1";
  }

}
