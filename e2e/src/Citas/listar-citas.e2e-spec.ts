import { Listarcita } from './listar-citas.po';

describe('Test listar', function () {

    let listarCita: Listarcita;



    beforeEach(async () => {
        listarCita = new Listarcita();
        await listarCita.navigateTo();
    })

    it('listar', async () => {

        await listarCita.btnNuevaCita.click();
     
    });

})