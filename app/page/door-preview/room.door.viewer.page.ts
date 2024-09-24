import { expect } from "@playwright/test";
import { AppPage } from "../../abstractClasses";
import { step } from "../../../misc/reporters/step";

export class RoomDoorViewerPage extends AppPage {
    public pagePath = '/';
    
    private renderedRoomImage = this.page.locator('div.refine-panel canvas.refine-overlay.hide')
    private uploadBlock = this.page.locator('div.scenario.upload')
    private uploadPhotoInput = this.page.locator('div.scenario.upload')
    private visualizeFooter = this.page.locator('div.visualize-footer')
    private roomImage (roomNumber: number) { return this.page.locator(`(//div[@class="scenario"])[${roomNumber}]`) }

    private doors = this.page.locator('div.door')
    private door (doorName: string) { return this.page.locator(`//p[text()="${doorName}"]/ancestor::div[@class="door"]`) }

    @step()
    async takeDoorViewerScreenshot(name:string) {
        await this.page.waitForLoadState('load')
        await expect(this.renderedRoomImage).toBeVisible()
        await this.page.waitForTimeout(2000)
        await expect(this.renderedRoomImage).toHaveScreenshot(name, {
          maxDiffPixels: 0.2,
          mask: [this.uploadBlock,this.roomImage(1),this.roomImage(2),this.roomImage(3),this.roomImage(4),this.roomImage(5),this.roomImage(6),this.visualizeFooter,this.doors],
        });
    }

    @step()
    async clickDoor(name:string){
        await this.door(name).click()
        await this.page.waitForLoadState('load')
    }
    @step()
    async clickRoomImage(roomNumber:number){
        await this.roomImage(roomNumber).click()
    }
    @step()
    async waitApiCall(name:string){
        await this.page.waitForRequest(request => request.url() === name);
    }
    
  
}