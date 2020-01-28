import { Component, OnInit } from '@angular/core';
import { Consulta } from '../shared/model/consulta';
import { ConsultaService } from '../shared/service/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearConsultasComponent implements OnInit {

  private titulo: string = "Nueva cita";

  
  private cita: Consulta = new Consulta();
  constructor(
    private consultaService: ConsultaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  create(): void {
    swal.fire({
      title: 'Esta Seguro de almacenar esta cita?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        console.log(this.cita);
        console.log("HOLA");
        this.consultaService.create(this.cita)
          .subscribe(resp => {
            swal.fire({
              title: 'Cita asignada correctamente!',
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


  validarSiNumero(numero) {
    if (!/^([0-9])*$/.test(numero))
      swal.fire({
        title: 'Valor Ingresado no es un numero',
        icon: 'warning'
      });
  }
  

}
