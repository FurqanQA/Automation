import { BasePage } from './basePage';
import { completeLocators } from '../Locators/completeLocators';

export class CompletePage extends BasePage {

    constructor(page) {
        super(page);

        this.completeHeader = this.page.locator(
            completeLocators.completeHeader
        );

        this.completeText = this.page.locator(
            completeLocators.completeText
        );

        this.backHomeButton = this.page.locator(
            completeLocators.backHomeButton
        );
    }

    async getCompleteMessage() {
        return await this.completeHeader.textContent();
    }

    async getCompleteText() {
        return await this.completeText.textContent();
    }

    async backToProducts() {
        await this.backHomeButton.click();
    }
}