import { AppPage } from "../../../abstractClasses";
import { expect } from "@playwright/test";
import { step } from "../../../../misc/reporters/step";

const path = require('path');
import fs from 'fs';
export class BurgerMenuMobilePage extends AppPage {
    public pagePath = '/';
    public roomsImageSection = this.page.locator('div.scenario-images-container')
    private flipDoorButton = this.page.locator('a.nav-link i.flip')
    private shareLinkButton = this.page.locator('a.nav-link i.share')
    private saveImgButton = this.page.locator('a.nav-link i.file-download')
    private roomImage(roomNumber: number) { return this.page.locator(`(//div[@class="scenario-image"])[${roomNumber}]`) }
    private closeMenuButton = this.page.locator('button[aria-label="Close"]')

    @step()
    async expectLoaded() {
        await expect(this.roomsImageSection).toBeVisible();
    }
    @step()
    async clickFlipDoorButton() {
        await this.flipDoorButton.click()
        await this.page.waitForLoadState('networkidle')
    }
    @step()
    async clickShareLinkButton() {
        await this.shareLinkButton.click()
    }
    @step()
    async clickSaveImgButton() {
        await this.saveImgButton.click()
    }
    @step()
    async clickRoomImage(roomNumber: number) {
        await this.page.waitForLoadState('networkidle')
        await this.roomImage(roomNumber).click()
    }
    @step()
    async clickCloseMenuButton() {
        await this.closeMenuButton.click()
    }
    @step()
    async mockShareDialog(): Promise<void> {
        await this.page.evaluate(() => {
            (window as any).waitForShareDialog = new Promise(resolve => {
                (navigator as any).share = resolve; // Мокаем вызов share
            });
        });
    }
    async waitForShareDialog(): Promise<void> {
        await this.page.waitForFunction('window.waitForShareDialog');
    }
    @step()
    async saveDownloadedImage() {
        await this.page.waitForLoadState('networkidle')
        const downloadPromise = this.page.waitForEvent('download');
        await this.clickSaveImgButton();
        await this.page.waitForLoadState('networkidle')
        const download = await downloadPromise;
        const downloadPath = path.join(__dirname, './downloads', download.suggestedFilename()!);
        await download.saveAs(downloadPath);
        console.log(`Файл сохранен по пути: ${downloadPath}`);

        return downloadPath;
    }
    @step()
    async verifyDownloadedImage(downloadPath: string, referenceImagePath: string) {
        const referenceImageBuffer = fs.readFileSync(referenceImagePath);
        const downloadedImageBuffer = fs.readFileSync(downloadPath);
        // Compare images
        expect(downloadedImageBuffer.equals(referenceImageBuffer)).toBeTruthy();
    }
}