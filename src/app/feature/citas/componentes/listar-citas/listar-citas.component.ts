import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/model/consulta';
import { ConsultaService } from '../shared/service/consulta.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarConsultasComponent implements OnInit {
  
  private titulo: string = "Listado de citas odontologicas programadas";
  listarConsultas : any;

  constructor(
    private consultaService: ConsultaService,
    private routher: RouterModule
  ) { }

  ngOnInit() {
    this.consultaService.getCitas().subscribe(
      consultas => this.listarConsultas = consultas
    );
  }

}
