import { BasePage } from './basePage';
import { loginLocators } from '../Locators/loginLocators';

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.usernameInput = this.page.locator(
            loginLocators.usernameInput
        );

        this.passwordInput = this.page.locator(
            loginLocators.passwordInput
        );

        this.loginButton = this.page.locator(
            loginLocators.loginButton
        );
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}