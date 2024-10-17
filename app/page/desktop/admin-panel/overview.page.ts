import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";

export class OverviewPage extends AppPage {
    public pagePath = '/overview'

    private welcomeText = this.page.locator('div.col-md-12 p')
    private visualDoorsTab = this.page.locator('a[routerlink="./visual-doors"]')



    @step()
    async expectLoaded() {
        await expect(this.welcomeText).toBeVisible();
        await expect(this.visualDoorsTab).toBeVisible();
    }
    @step()
    async clickVisualDoorsTab() {
        await this.visualDoorsTab.click()
    }

 
}
