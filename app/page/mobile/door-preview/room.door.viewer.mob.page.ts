import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";
const path = require('path');

export class RoomDoorMobileViewerPage extends AppPage {
    public pagePath = '/';

    private header = this.page.locator('div.top-button-row')
    private swipeMenuSectiion = this.page.locator('app-swipe-menu')
    private visualizeButtonsSection = this.page.locator('div.visualize-description-container')
    private visualizeSections = this.page.locator('app-mobile-visualize-panel')
    private spinnerLoader= this.page.locator('div.spinner-border')

    private renderedRoomImage = this.page.locator('app-mobile-visualize-panel canvas')
    private nextDoorArrow = this.page.locator('div.door-nav-right svg')
    private previousDoorArrow = this.page.locator('div.door-nav-left svg')
    private saveNewDoorPositionButton = this.page.locator('button.btn-refine-save')

    private uploadPhotoButton = this.page.locator('button.btn-upload')
    private uploadPhotoInput = this.page.locator('input#pictureButtonFromFile')
    public goToShopButton = this.page.locator('button.btn-product')
    private markFavouriteButton = this.page.locator('button.btn-favorite')
    private refinePositioningButton = this.page.locator('button.btn-refine')
    private menuButton = this.page.locator('button i.menu')

    
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

   
}