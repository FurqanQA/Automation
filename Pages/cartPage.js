import { BasePage } from './basePage';
import { cartLocators } from '../Locators/cartLocators';

export class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartItems = this.page.locator(cartLocators.cartItems);
        this.checkoutButton = this.page.locator(cartLocators.checkoutButton);
        this.continueShoppingButton = this.page.locator(
            cartLocators.continueShoppingButton
        );
    }

    async verifyProduct(productName) {
        const product = this.cartItems.filter({
            hasText: productName
        });

        return await product.isVisible();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}