import { BasePage } from './basePage';
import { overviewLocators } from '../Locators/overviewLocators';

export class OverviewPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartItems = this.page.locator(
            overviewLocators.cartItems
        );

        this.productName = this.page.locator(
            overviewLocators.productName
        );

        this.productPrice = this.page.locator(
            overviewLocators.productPrice
        );

        this.subtotal = this.page.locator(
            overviewLocators.subtotal
        );

        this.tax = this.page.locator(
            overviewLocators.tax
        );

        this.total = this.page.locator(
            overviewLocators.total
        );

        this.finishButton = this.page.locator(
            overviewLocators.finishButton
        );

        this.cancelButton = this.page.locator(
            overviewLocators.cancelButton
        );
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    async getSubtotal() {
        return await this.subtotal.textContent();
    }

    async getTax() {
        return await this.tax.textContent();
    }

    async getTotal() {
        return await this.total.textContent();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async cancelOrder() {
        await this.cancelButton.click();
    }
}