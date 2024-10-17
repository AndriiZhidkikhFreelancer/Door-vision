import { AppPage } from "../../../abstractClasses";
import { expect } from "@playwright/test";
import { step } from "../../../../misc/reporters/step";

export class DoorPanelMobilePage extends AppPage {
    public pagePath = '/';
    public doors = this.page.locator('div.door img')
    public door(number: number) { return this.page.locator(`(//div[@class="door"]//img)[${number}]`) }
    public activeDoor = this.page.locator('div.door.active')
    private favouriteButton = this.page.locator('div.door-buttons i')
    private favouriteMarkForDoor (number: number) { return this.page.locator(`(//div[@class="door"])[${number}]//div[@class="fav-container"]`) }
    private favouriteMarkForActiveDoor = this.page.locator('div.door.active div.fav-container')
    public doorsMarkedAsFavourite = this.page.locator('div.door div.marked-as-favorite') 
    @step()
    async expectLoaded() {
        await this.doors.all().then(async (elements) => {
            for (const element of elements) {
                await expect(element).toBeVisible();
            }
        });
    }
    @step()
    async clickDoor(number:number) {
        await this.door(number).click()
        await this.page.waitForLoadState('networkidle')
    }
    @step()
    async clickFavouriteMarkForDoor(number:number) {
        await this.favouriteMarkForDoor(number).click()
    }
    @step()
    async clickFavouriteMarkForActiveDoor() {
        await this.favouriteMarkForActiveDoor.click()
    }
    @step()
    async clickFavouriteButton() {
        await this.favouriteButton.click()
    }

   
}