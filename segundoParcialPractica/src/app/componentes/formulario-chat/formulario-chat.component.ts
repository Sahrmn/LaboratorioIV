import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../clases/mensaje';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-formulario-chat',
  templateUrl: './formulario-chat.component.html',
  styleUrls: ['./formulario-chat.component.scss']
})
export class FormularioChatComponent implements OnInit {

  mensaje: string;
  email: string;

  constructor(private chatService: ChatService) {
  	let usuario = JSON.parse(localStorage.getItem('usuario'));
  	this.email = usuario.email;
  }

  ngOnInit() {
  }

  resetearCampo(){
    this.mensaje = " ";
  }

  enviar(){
    let hora = Date.now();
    let data = {
      mensaje: this.mensaje,
      email: this.email,
      hora: hora
    };
    this.chatService.guardarMensaje(data);
    this.resetearCampo();
  }

  onKeydown(event){
    if (event.key === "Enter") {
      this.enviar();
    }
  }

}
