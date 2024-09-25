import { expect } from "@playwright/test";
import { AppPage } from "../../abstractClasses";
import { step } from "../../../misc/reporters/step";
const path = require('path');

export class RoomDoorViewerPage extends AppPage {
    public pagePath = '/';
    private spinnerLoader= this.page.locator('div.spinner-border')
    private renderedRoomImage = this.page.locator('div.refine-panel canvas.refine-overlay.hide')
    private header = this.page.locator('div.row.header-row')
    private uploadPhotoInput = this.page.locator('input#upload-file')
    private saveNewDoorPositionButton = this.page.locator('button.btn-refine-save')
    private visualizeFooter = this.page.locator('div.visualize-footer')
    private roomImage (roomNumber: number) { return this.page.locator(`(//div[@class="scenario"])[${roomNumber}]`) }
    public favouriteToggleText = this.page.locator('span.toggle-text-off')

    public goToShopButton = this.page.locator('button[title="Find Out More"]')
    private shareLinkButton = this.page.locator('button[title="Share Link"]')
    private saveImgButton = this.page.locator('button[title="Save Image"]')
    private flipDoorButton = this.page.locator('button[title="Flip Door"]')
    private markFavouriteButton = this.page.locator('button[title="Mark Favourite"]')

    private doorsContainer = this.page.locator('div.door-list-container')
    public doors = this.page.locator('div.door')
    public door (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door"]`) }
    public activeDoor (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door active"]`) }
    public doorFavouriteMark (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door"]//div[@class="fav-container"]`) }
    public activeDoorFavouriteMark (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door active"]//div[@class="fav-container"]`) }
    public doorMarkedAsFavourite (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door"]//i[@class="m-icon heart-solid"]`) }
    public activeDoorMarkedAsFavourite (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door active"]//i[@class="m-icon heart-solid"]`) }
    @step()
    async takeDoorViewerScreenshot(name:string) {
        await this.page.waitForLoadState('networkidle')
        await expect(this.renderedRoomImage).toBeVisible()
        await this.page.waitForTimeout(2000)
        await expect(this.renderedRoomImage).toHaveScreenshot(name, {
          maxDiffPixels: 0.2,
          mask: [this.header,this.visualizeFooter,this.doorsContainer],
        });
    }

    @step()
    async clickDoor(name:string){
        await this.door(name).click()
        await this.page.waitForLoadState('networkidle')
    }
    @step()
    async clickRoomImage(roomNumber:number){
        await this.page.waitForLoadState('networkidle')
        await expect(this.spinnerLoader).toHaveCount(0)
        await this.roomImage(roomNumber).click()
    }
    @step()
    async waitApiCall(name:string){
        await this.page.waitForRequest(request => request.url() === name);
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
    async clickGoToShopButton(){
        await this.goToShopButton.click()
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
    async clickFlipDoorButton(){
        await this.flipDoorButton.click()
    }
    @step()
    async clickMarkFavouriteButton(){
        await this.markFavouriteButton.click()
    }
    @step()
    async clickFavouriteToggleText(){
        await this.favouriteToggleText.click()
    }
    @step()
    async clickDoorFavouriteMark(doorName:string){
        await this.door(doorName).hover()
        await this.doorFavouriteMark(doorName).click()
    }
    @step()
    async clickActiveDoorFavouriteMark(doorName:string){
        await this.activeDoor(doorName).hover()
        await this.activeDoorFavouriteMark(doorName).click()
    }
}