import { AppPage } from "../../../abstractClasses";
import { expect } from "@playwright/test";
import { step } from "../../../../misc/reporters/step";

export class BurgerMenuMobilePage extends AppPage {
    public pagePath = '/';
    public roomsImageSection = this.page.locator('div.scenario-images-container')
    private flipDoorButton = this.page.locator('a.nav-link i.flip')
    private shareLinkButton = this.page.locator('a.nav-link i.share')
    private saveImgButton = this.page.locator('a.nav-link ifile-download')
    private roomImage (roomNumber: number) { return this.page.locator(`(//div[@class="scenario-image"])[${roomNumber}]`) }
    private closeMenuButton = this.page.locator('button[aria-label="Close"]')

    @step()
    async expectLoaded() {
        await expect(this.roomsImageSection).toBeVisible();
    }
    @step()
    async clickFlipDoorButton(){
        await this.flipDoorButton.click()
        await this.page.waitForLoadState('networkidle')
    }
    @step()
    async clickShareLinkButton(){
        await this.shareLinkButton.click()
    }
    @step()
    async clickSaveImgButton(){
        await this.saveImgButton.click()
    }
    @step()
    async clickRoomImage(roomNumber:number){
        await this.page.waitForLoadState('networkidle')
        await this.roomImage(roomNumber).click()
    }
    @step()
    async clickCloseMenuButton(){
        await this.closeMenuButton.click()
    }


   
}