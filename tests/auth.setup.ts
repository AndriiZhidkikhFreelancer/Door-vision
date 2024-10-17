import { test as setup, expect } from '@playwright/test';
import { SignIn, OverviewPage } from '../app/index';
import { user } from '../app/data/user.data';
const authFile = 'playwright/.auth/user.json';


setup('authenticate', async ({ page }) => {
    const signIn = new SignIn(page)
    const overviewPage = new OverviewPage(page)
    await page.goto('https://admin.test.door-vision.cloud')
    //await signIn.open();
    await signIn.expectLoaded()
    await signIn.signIn(user.admin)

    await page.waitForURL(overviewPage.pagePath);
    await overviewPage.expectLoaded()
    await expect(signIn.emailInput).toHaveCount(0)
    await page.context().storageState({ path: authFile });
});