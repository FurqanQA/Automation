import { BasePage } from './basePage';
import { cartLocators } from '../Locators/cartLocators';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartItems = this.page.locator(
            cartLocators.cartItems
        );

        this.checkoutButton = this.page.locator(
            cartLocators.checkoutButton
        );

        this.continueShoppingButton = this.page.locator(
            cartLocators.continueShoppingButton
        );
    }

    async expectProductVisible(productName) {

        const product = this.cartItems.filter({
            has: this.page.getByText(productName, { exact: true })
        });

        await expect(product).toBeVisible();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}