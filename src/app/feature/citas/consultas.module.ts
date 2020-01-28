import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { citasComponent } from './componentes/citas/citas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { FormsModule } from '@angular/forms';
import { ListarConsultasComponent } from './componentes/listar-citas/listar-citas.component';
import { CrearConsultasComponent } from './componentes/crear-citas/crear-citas.component';
import { EditarConsultasComponent } from './componentes/editar-citas/editar-citas.component';

@NgModule({
  declarations: [
    citasComponent,
    ListarConsultasComponent,
    CrearConsultasComponent,
    EditarConsultasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
