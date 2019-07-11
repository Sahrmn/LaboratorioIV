import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.scss']
})
export class BuscarUsuariosComponent implements OnInit {

  tipo: string = "todos";
  @Output() public myOutPut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionTipo(){
  	this.myOutPut.emit(this.tipo);
  }

}
