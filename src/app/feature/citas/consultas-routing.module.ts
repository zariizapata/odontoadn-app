import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarConsultasComponent } from './componentes/listar-citas/listar-citas.component';
import { CrearConsultasComponent } from './componentes/crear-citas/crear-citas.component';
import { EditarConsultasComponent } from './componentes/editar-citas/editar-citas.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listar', component: ListarConsultasComponent },
  { path: 'crear', component: CrearConsultasComponent },
  { path: 'editar/:id', component: EditarConsultasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
