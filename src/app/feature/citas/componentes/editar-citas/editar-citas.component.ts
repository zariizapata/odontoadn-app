import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/model/consulta';
import { ConsultaService } from '../shared/service/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarConsultasComponent implements OnInit {

  private titulo: string = 'Editar Cita'
  private cita: Consulta = new Consulta();
  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargarCitasOdontologicas();
  }

  public cargarCitasOdontologicas() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        this.consultaService.getCitasPorId(id).subscribe(
          (consulta) => this.cita = consulta
        )
      }
    )
  }

  actualizar(): void {
    swal.fire({
      title: 'Esta Seguro de actualizar esta cita?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        console.log(this.cita);
        this.consultaService.actualizar(this.cita)
          .subscribe(resp => {
            swal.fire({
              title: 'Cita actualizada correctamente!',
              icon: 'success',
              showConfirmButton: false
            });
            this.router.navigate(['/listar'])
                     
          },
          error => {
            swal.fire({
              title: error.error.mensaje,
              icon: 'warning',
              showConfirmButton: false
            });
            console.log();
          });
          
      }
    });
  }

}
