import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db:AngularFirestore) { }

  getMensajes(){
    return this.db.collection('mensajes').snapshotChanges();
  }

  guardarMensaje(data){
  	return this.db.collection('mensajes').add(data);
  }

}
