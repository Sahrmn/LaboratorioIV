import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import * as $ from 'jquery';
import { Profesor } from '../../clases/profesor';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  
  tipo: string;
  text: string;
  text2: string;

  constructor(private db: FirebaseService) { 
  
  }

  ngOnInit() {
  }

  
  seleccionarTipo(e){
    console.log(e);
    //this.myInput = e;
    this.tipo = e;
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
