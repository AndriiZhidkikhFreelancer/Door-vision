import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";

const path = require('path');

export class RoomDoorMobileViewerPage extends AppPage {
    public pagePath = '/';

    private header = this.page.locator('div.top-button-row')
    private swipeMenuSectiion = this.page.locator('app-swipe-menu')
    private visualizeButtonsSection = this.page.locator('div.visualize-description-container')
    public visualizeSections = this.page.locator('app-mobile-visualize-panel')
    public spinnerLoader= this.page.locator('div.spinner-border')

    public renderedRoomImage = this.page.locator('app-mobile-visualize-panel canvas')
    private nextDoorArrow = this.page.locator('div.door-nav-right svg')
    private previousDoorArrow = this.page.locator('div.door-nav-left svg')
    private saveNewDoorPositionButton = this.page.locator('button.btn-refine-save')

    private uploadPhotoButton = this.page.locator('button.btn-upload')
    private uploadPhotoInput = this.page.locator('input#pictureButtonFromFile')
    public goToShopButton = this.page.locator('button.btn-product')
    private markFavouriteButton = this.page.locator('button.btn-favorite')
    private refinePositioningButton = this.page.locator('button.btn-refine')
    private menuButton = this.page.locator('button i.menu')
    public doorName = this.page.locator('p.visualize-description a')

    private swipeMenuButton= this.page.locator('div.swipe-menu-header-button')

    
    @step()
    async takeDoorViewerScreenshot(name:string) {
        await this.page.waitForLoadState('networkidle')
        await expect(this.renderedRoomImage).toBeVisible()
        await this.page.waitForTimeout(2000)
        await expect(this.renderedRoomImage).toHaveScreenshot(name, {
          maxDiffPixels: 0.2,
          mask: [this.header,this.swipeMenuSectiion,this.visualizeButtonsSection,this.previousDoorArrow,this.nextDoorArrow,],
        });
    }
    @step()
    async clickSwipeMenuButton(){
        await this.swipeMenuButton.click()
    }
    @step()
    async clickUploadPhotoButton(){
        await this.uploadPhotoButton.click()
    }
    @step()
    async uploadNewphoto(folder:string,imgName:string){
         await this.page.waitForTimeout(1000)
         this.uploadPhotoInput.setInputFiles(path.join(folder,imgName))
         await this.page.waitForLoadState('networkidle')
    }
    @step() 
    async clickSaveNewDoorPositionButton(){
        await this.page.waitForTimeout(1000)
        await expect(this.spinnerLoader).toHaveCount(0,{ timeout: 10000 })
        await expect(this.saveNewDoorPositionButton).toHaveText('Save',{ timeout: 10000 })
        await expect(this.saveNewDoorPositionButton).toBeVisible({ timeout: 10000 })
        await this.page.waitForTimeout(500)
        await this.saveNewDoorPositionButton.click()
    }
    @step()
    async clickNextDoorArrow(){
        await this.nextDoorArrow.click()
    }
    @step()
    async clickPreviousDoorArrow(){
        await this.previousDoorArrow.click()
    }

}