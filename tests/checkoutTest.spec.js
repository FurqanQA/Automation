import { test, expect } from '@playwright/test';

import { LoginPage } from '../Pages/loginPage';
import { InventoryPage } from '../Pages/inventoryPage';
import { CartPage } from '../Pages/cartPage';
import { CheckoutPage } from '../Pages/checkoutPage';

import { testData } from '../Fixture/testData';


test('Complete checkout flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await page.goto('/');

    await loginPage.login(
        testData.ValidUser.username,
        testData.ValidUser.password
    );

    // Verify Inventory
    await expect(page.getByText('Products')).toBeVisible();

    // Add product
    await inventoryPage.addProduct(
        testData.Product.backpack
    );

    // Verify cart badge
    expect(
        await inventoryPage.getCartBadgeCount()
    ).toBe(1);

    // Open cart
    await inventoryPage.openCart();

    // Verify product in cart
    expect(
        await cartPage.verifyProduct(
            testData.Product.backpack
        )
    ).toBe(true);

    // Checkout
    await cartPage.checkout();

    // Verify checkout page
    await expect(page.getByText('Checkout: Your Information'))
        .toBeVisible();

    // Fill checkout information
    await checkoutPage.fillCheckoutInformation(
        testData.Checkout.firstName,
        testData.Checkout.lastName,
        testData.Checkout.postalCode
    );

    // Continue
    await checkoutPage.continue();

    // Verify overview page
    await expect(page.getByText('Checkout: Overview'))
        .toBeVisible();
});