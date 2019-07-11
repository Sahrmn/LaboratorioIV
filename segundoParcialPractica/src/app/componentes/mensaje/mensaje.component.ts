import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../clases/mensaje';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {

  lista: Mensaje[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  	this.traerMensajes();
  }

  traerMensajes(){
  	this.chatService.getMensajes().subscribe(response => {
      this.lista = response.map(item=>{
        return item.payload.doc.data() 
      })
	});
  }

  ngOnChanges(){
    this.chatService.getMensajes().subscribe(response=>{
      this.lista = response.map(item=>{
        return{
          mensaje: item.payload.doc.data()
        } as Mensaje;
      })
    })
  }

  

}
