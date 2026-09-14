import { BasePage } from './basePage';
import { inventoryLocators } from '../Locators/inventoryLocators';

export class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.productCards = this.page.locator(
            inventoryLocators.productCards
        );

        this.productName = this.page.locator(
            inventoryLocators.productName
        );

        this.productPrice = this.page.locator(
            inventoryLocators.productPrice
        );

        this.cartLink = this.page.locator(
            inventoryLocators.cartLink
        );

        this.cartBadge = this.page.locator(
            inventoryLocators.cartBadge
        );
    }

    async addProductToCart(productName) {

        const product = this.productCards.filter({
            hasText: productName
        });

        await product
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getCartBadgeCount() {

        const count = await this.cartBadge.textContent();

        return parseInt(count, 10);
    }
}