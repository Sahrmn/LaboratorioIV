import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './componentes/home-profesor/home-profesor.component';
//import { FirebaseService } from './servicios/firebase.service';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'home/user', pathMatch: 'full'},
	{ path: 'alta', component: AltaUsuarioComponent},
	//{ path: 'menu', component: MenuComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'home/admin', component: HomeComponent, canActivate: [CanActivateGuard]},
	{ path: 'home/user', component: HomeAlumnoComponent, canActivate: [CanActivateGuard]},
	{ path: 'home/profesor', component: HomeProfesorComponent, canActivate: [CanActivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
