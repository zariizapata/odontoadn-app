import { Home } from './home.po';

describe('Test Home', function () {

    let home: Home;

    const cedula: string = "1035432774";
    const nombre  : string ="Sara Marcela Zapata"
    const medico : string ="Camilo Calderon";
    //const fecha: Date= "2020-01-28";
    const hora: String = "10:20";
    const tipo: String ="Limpieza";
    const tarifa: String="100000";
    const estado:String ="Pendiente";

    beforeEach(async () => {
        home = new Home();
        await home.navigateTo();
    })

    it('home', async () => {

        await home.btnIngreso.click();
        console.log("btnCita")

    });

})