import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
//import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';

import { AngularFireAuthModule } from  "angularfire2/auth";

import { AngularFirestore } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HomeComponent } from './componentes/home/home.component';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { ListaMateriasComponent } from './componentes/lista-materias/lista-materias.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { BuscarUsuariosComponent } from './componentes/buscar-usuarios/buscar-usuarios.component';
import { AltaMateriasComponent } from './componentes/alta-materias/alta-materias.component';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';
import { InscribirAMateriaComponent } from './componentes/inscribir-a-materia/inscribir-a-materia.component';
import { ListaInscripcionesComponent } from './componentes/lista-inscripciones/lista-inscripciones.component';
import { HomeProfesorComponent } from './componentes/home-profesor/home-profesor.component';
import { AlumnosMateriaComponent } from './componentes/alumnos-materia/alumnos-materia.component';
import { SalaChatComponent } from './componentes/sala-chat/sala-chat.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { FormularioChatComponent } from './componentes/formulario-chat/formulario-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaUsuarioComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    HomeAdminComponent,
    ListaMateriasComponent,
    ListaUsuariosComponent,
    BuscarUsuariosComponent,
    AltaMateriasComponent,
    HomeAlumnoComponent,
    InscribirAMateriaComponent,
    ListaInscripcionesComponent,
    HomeProfesorComponent,
    AlumnosMateriaComponent,
    SaltaChatComponent,
    SalaChatComponent,
    MensajeComponent,
    FormularioChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    /*RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
      ]),*/
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
