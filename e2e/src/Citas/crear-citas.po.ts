import { browser, by, element, } from 'protractor';

export class CrearCita {

    cedula = element(by.xpath('//*[@id="cedula"]'));
    nombre = element(by.name('nombre'));
    celular = element(by.name('celular'));
    medico = element(by.xpath('//*[@id="medico"]/option[2]'));
    fecha = element(by.name('fecha'));
    hora = element(by.name('hora'));
    tipo = element(by.name('tipo'));
    tarifa = element(by.xpath('//*[@id="tarifa"]'));
    estado = element(by.xpath('//*[@id="estado"]/option[1]'));
    btnSave= element(by.xpath('/html/body/app-root/section/app-crear-citas/div/div[2]/form/div[6]/div[1]/button'));
    btnOk=element(by.xpath('/html/body/div/div/div[3]/button[1]'));
    respuestaOK = element(by.xpath('//*[@id="swal2-title"]'));
    constructor() {
    }

    navigateTo(url = "crear"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }
   
     
    async setCedula(text: string): Promise<void> {
        return await this.cedula.sendKeys(text);
    }
    async setCelular(text: string): Promise<void> {
        return await this.celular.sendKeys(text);
    }
    async setNombre(text: string): Promise<void> {
        return await this.nombre.sendKeys(text);
    }
    async setMedico(): Promise<void> {
        await this.medico.click();
    }
    async setTipo(text: string): Promise<void> {
        return await this.tipo.sendKeys(text);
    }
    async setHora(text: number): Promise<void> {
        return await this.hora.sendKeys(text);
    }
    async clearHora(): Promise<void> {
        return await this.hora.sendKeys('');
    }
    async setTarifa(text: string): Promise<void> {
        return await this.tarifa.sendKeys(text);
    }
    async setEstado(): Promise<void> {
        return await this.estado.click();
    }
    async setfecha(text: string): Promise<void> {
        return await this.fecha.sendKeys(text);
    }
    async clickBtnSave(): Promise<void> {
        await this.btnSave.click();
    }
    async clickBtnOk(): Promise<void> {
        await this.btnOk.click();
    }
    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }
    async obtenerRespuestaOk(): Promise<string> {
        return await this.respuestaOK.getText();
    }
   
    
  
    
   

}
