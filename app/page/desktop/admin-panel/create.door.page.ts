import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";
const path = require('path');

export class CreateDoorPage extends AppPage {
    public pagePath = 'https://admin.test.door-vision.cloud/visual-doors/new'

    private doorNameField = this.page.locator('input#name')
    private externalIdsField = this.page.locator('input#externalIds')
    private shopLinkField = this.page.locator('input#showNowLink')
    private priceField = this.page.locator('input#priceValue')
    private priceCurrencySelect= this.page.locator('select[name="priceCurrency"]')
    private uploadImageField = this.page.locator('input#inputGroupFile01')
    private saveButton = this.page.locator('button[type="submit"]')

    @step()
    async setDoorNameField(text:string) {
        await this.doorNameField.type(text)
    }
    @step()
    async setExternalIdsField(text:string) {
        await this.externalIdsField.type(text)
    }
    @step()
    async setShopLinkField(text:string) {
        await this.shopLinkField.type(text)
    }
    @step()
    async setPriceField(text:string) {
        await this.priceField.type(text)
    }
    @step()
    async choosePriceCurrencySelect(text:string) {
        await this.priceCurrencySelect.selectOption(text)
    }
    @step()
    async uploadDoorImage(folder: string, imgName: string) {
        this.uploadImageField.setInputFiles(path.join(folder, imgName))
    }
    @step()
    async clickSaveButton() {
        await this.saveButton.click()
    }
 
}
