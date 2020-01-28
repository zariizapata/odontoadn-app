import { browser, by, element, } from 'protractor';

export class Home {
    btnIngreso= element(by.xpath('/html/body/app-root/section/app-home/div[2]/div/a/span'));

    constructor() {
    }

    navigateTo(url = "home"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }
  
    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }
   

}