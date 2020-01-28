import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './feature/home/home.component';
import { CrearConsultasComponent } from './feature/citas/componentes/crear-citas/crear-citas.component';
import { EditarConsultasComponent } from './feature/citas/componentes/editar-citas/editar-citas.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'consultas', loadChildren: () => import('./feature/citas/consultas.module').then(mod => mod.ConsultasModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
