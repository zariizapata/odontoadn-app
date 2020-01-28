import { browser, by, element, } from 'protractor';

export class Listarcita {

    btnNuevaCita= element(by.xpath('//*[@id="btnnuevacita"]'));
    constructor() {
    }

    navigateTo(url = "listar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }
   
    async clickbtnNuevaCita(): Promise<void> {
        await this.btnNuevaCita.click();
    }
    
    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }
    
   

}