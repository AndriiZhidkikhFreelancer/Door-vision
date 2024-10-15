import { AppPage } from "../../../abstractClasses";
import { expect } from "@playwright/test";
import { step } from "../../../../misc/reporters/step";

export class DoorPanelMobilePage extends AppPage {
    public pagePath = '/';
    public doors = this.page.locator('div.door img')
    public door(number: number) { return this.page.locator(`(//div[@class="door"])[${number}]`) }
    public activeDoor = this.page.locator('div.door.active')


    @step()
    async expectLoaded() {
        await this.doors.all().then(async (elements) => {
            for (const element of elements) {
                await expect(element).toBeVisible();
            }
        });
    }
}