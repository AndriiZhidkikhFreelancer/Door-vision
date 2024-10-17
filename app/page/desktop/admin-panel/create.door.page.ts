import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";
import { expect } from "@playwright/test";
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
    public successMessage = this.page.locator('div[aria-label="Saved successfully"]')
    public newDoorImg = this.page.locator('app-show-visual-door div img')


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
    async choosePriceCurrency(text:string) {
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
    @step()
    async pingNewDoorImg() {
        const imgSrc = await this.newDoorImg.getAttribute('src');
        expect(imgSrc, 'Image src attribute is missing for new door img').not.toBeNull();
        const imageUrl = new URL(imgSrc as string, this.page.url()).href;
        const response = await this.page.request.get(imageUrl);
        expect(response.status(), `Failed to load image: ${imageUrl}`).toBe(200);
        return response;
    }
 
}
