import { expect } from "@playwright/test";
import { AppPage } from "../../../abstractClasses";
import { step } from "../../../../misc/reporters/step";

export class SignIn extends AppPage {
    public pagePath = 'https://admin.test.door-vision.cloud'

    private signInButton = this.page.locator('button[type="submit"]')
    public emailInput = this.page.locator('input#email')
    private passwordInput = this.page.locator('input#password')

    @step()
    async open() {
        await this.page.goto(this.pagePath)
    }

    @step()
    async expectLoaded() {
        await expect(this.signInButton).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
    }

    @step()
    async signIn(user: { login: string, pass: string }) {
        await this.emailInput.fill(user.login)
        await this.passwordInput.fill(user.pass)
        await this.signInButton.click()
    }
}
