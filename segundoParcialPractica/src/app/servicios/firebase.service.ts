import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "angularfire2/auth";
import { AngularFirestore } from 'angularfire2/firestore';
//import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fauth: AngularFireAuth, private db:AngularFirestore) { }

  crearUsuario(correo, pass) {
    return this.fauth.auth.createUserWithEmailAndPassword(correo, pass);
  }

  login(email, clave){
  	this.fauth.auth.signInWithEmailAndPassword(email, clave);
  }

  isLogged(){
  	var user = this.fauth.auth.currentUser;
    if(user != undefined)
      return true;
    else
      return false;
  }

  logOut(){
  	this.fauth.auth.signOut();
  }
  /*
  getProfesores() {
    return this.db.collection('profesores').snapshotChanges();
  }
  */

  guardarMateria(data) {
    return this.db.collection('materias').add(data);
  }

  getMaterias() {
    return this.db.collection('materias').snapshotChanges();
  }

  updateMateria(data) {
    return this.db.collection('materias').doc(data.id).update(data);
  }

  guardarUsuario(data) {
    return this.db.collection('usuarios').add(data);
  }

  getUsuarios() {
    return this.db.collection('usuarios').snapshotChanges();
  }

  guardarInscripcion(data) {
    return this.db.collection('inscripciones').add(data);
  }

  getInscripciones() {
    return this.db.collection('inscripciones').snapshotChanges();
  }

}
