import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";

export class VisualDoorsPage extends AppPage {
    public pagePath = 'https://admin.test.door-vision.cloud/visual-doors'

    private createNewDoorButton = this.page.locator('button i.fa-plus')
    private visualDoorsTitle = this.page.locator('h3')

    @step()
    async expectLoaded() {
        await expect(this.visualDoorsTitle).toBeVisible();
        await expect(this.visualDoorsTitle).toHaveText(' Visual doors');
        await expect(this.createNewDoorButton).toBeVisible();
    }

    @step()
    async clickCreateNewDoorButton() {
        await this.createNewDoorButton.click()
    }
 
}
