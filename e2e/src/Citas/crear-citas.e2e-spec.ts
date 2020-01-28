import { CrearCita } from './crear-citas.po';

describe('Test listar', function () {

    let crearCitaPage: CrearCita;

    const cedula: string = "1035432774";
    const nombre  : string ="Sara Marcela Zapata"
    const celular : string ="3214569877";
    const fecha: string= "01-14-2020";
    const hora: number =  Date.now();
    const tipo: string ="Limpieza";
    const tarifa: string="100";

    beforeEach(async () => {
        crearCitaPage = new CrearCita();
        await crearCitaPage.navigateTo();
    })

    it('crear', async () => {
        const expectedMessage = "Cita asignada correctamente!";

        await crearCitaPage.setCedula(cedula); 
        await crearCitaPage.clearHora();
        await crearCitaPage.setHora(hora);
        await crearCitaPage.setMedico();
        await crearCitaPage.setNombre(nombre);
        await crearCitaPage.setTipo(tipo);
        await crearCitaPage.setTarifa(tarifa);
        await crearCitaPage.setEstado();
        await crearCitaPage.setCelular(celular);
        await crearCitaPage.setfecha(fecha);
        await crearCitaPage.setEstado();
        await crearCitaPage.sleep(6000);
        await crearCitaPage.btnSave.click();
        await crearCitaPage.btnOk.click();

       const respuestaCrear = await crearCitaPage.obtenerRespuestaOk();
       expect(respuestaCrear.trim()).toContain(expectedMessage);
    });

})