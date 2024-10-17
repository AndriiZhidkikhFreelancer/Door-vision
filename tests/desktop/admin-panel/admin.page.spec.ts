import { adminFixture, expect } from '../../../fixtures/admin.fixture';
import path from 'path';

adminFixture.describe('DV-1/01: Door preview - Desctop', () => {
   adminFixture.only(`ID-A2:Visit the visual door page`, async ({ overviewPage,visualDoorsPage,page }) => {
      await page.goto('https://admin.test.door-vision.cloud')
      await overviewPage.expectLoaded()
      await overviewPage.clickVisualDoorsTab()
      await visualDoorsPage.expectLoaded()
   });
   adminFixture(`ID-A3:Visit the visual door page`, async ({ overviewPage,visualDoorsPage }) => {
    await visualDoorsPage.open()
    await visualDoorsPage.expectLoaded()
    await visualDoorsPage.clickCreateNewDoorButton()
 });
});