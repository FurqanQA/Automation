import { BasePage } from './basePage';
import { checkoutLocators } from '../Locators/checkoutLocators';

export class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.firstNameInput = this.page.locator(
            checkoutLocators.firstNameInput
        );

        this.lastNameInput = this.page.locator(
            checkoutLocators.lastNameInput
        );

        this.postalCodeInput = this.page.locator(
            checkoutLocators.postalCodeInput
        );

        this.continueButton = this.page.locator(
            checkoutLocators.continueButton
        );

        this.cancelButton = this.page.locator(
            checkoutLocators.cancelButton
        );
    }

    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async enterPostalCode(postalCode) {
        await this.postalCodeInput.fill(postalCode);
    }

    async continue() {
        await this.continueButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    async fillCheckoutInformation(
        firstName,
        lastName,
        postalCode
    ) {

        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
}