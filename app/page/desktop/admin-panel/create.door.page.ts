import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";
import { expect } from "@playwright/test";
const path = require('path');

export class CreateDoorPage extends AppPage {
    public pagePath = 'https://admin.test.door-vision.cloud/visual-doors/new'
    public doorNameField = this.page.locator('input#name')
    public title = this.page.locator('h3')
    private externalIdsField = this.page.locator('input#externalIds')
    private shopLinkField = this.page.locator('input#showNowLink')
    private priceField = this.page.locator('input#priceValue')
    private priceCurrencySelect= this.page.locator('select[name="priceCurrency"]')
    private uploadImageField = this.page.locator('input#inputGroupFile01')
    private saveButton = this.page.locator('button[type="submit"]')
    public alertMessage = this.page.locator('div[role="alert"]')
    public newDoorImg = this.page.locator('app-show-visual-door div img')
    private deleteDoorButton = this.page.locator('//button[text()="Delete "]')
   

    @step()
    async setDoorNameField(text:string) {
        await this.page.waitForLoadState('networkidle')
        await this.doorNameField.fill(text)
        await expect(this.doorNameField).toHaveValue(text)
    }
    @step()
    async setExternalIdsField(text:string) {
        await this.page.waitForLoadState('networkidle')
        await this.externalIdsField.fill(text)
        await expect(this.externalIdsField).toHaveValue(text)
    }
    @step()
    async setShopLinkField(text:string) {
        await this.page.waitForLoadState('networkidle')
        await this.shopLinkField.fill(text)
        await expect(this.shopLinkField).toHaveValue(text)
    }
    @step()
    async setPriceField(text:string) {
        await this.page.waitForLoadState('networkidle')
        await this.priceField.fill(text)
        await expect(this.priceField).toHaveValue(text)
    }
    @step()
    async choosePriceCurrency(text:string) {
        await this.page.waitForLoadState('networkidle')
        await this.priceCurrencySelect.selectOption(text)
    }
    @step()
    async uploadDoorImage(folder: string, imgName: string) {
        this.uploadImageField.setInputFiles(path.join(folder, imgName))
    }
    @step()
    async clickSaveButton() {
        await this.page.waitForLoadState('networkidle')
        await this.saveButton.click()
    }
    @step()
    async clickDeleteDoorButtonn() {
        this.page.on('dialog', async dialog => {
            await dialog.accept();
          });
        await this.deleteDoorButton.click()
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
