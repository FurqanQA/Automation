import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginPage";
import { InventoryPage } from "../Pages/inventoryPage";
import { CartPage } from "../Pages/cartPage";
import { CheckoutPage } from "../Pages/checkoutPage";
import { testData } from "../Fixture/testData";
import { OverviewPage } from "../Pages/overviewPage";
import { CompletePage } from '../Pages/completePage';



test('Complete checkout flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const overviewPage = new OverviewPage(page);
    const completePage = new CompletePage(page);

    // Login
    await page.goto('/');

    await loginPage.login(
        testData.ValidUser.username,
        testData.ValidUser.password
    );

    // Inventory
    await expect(page.getByText('Products')).toBeVisible();

    await inventoryPage.addProduct(
        testData.Product.backpack
    );

    expect(
        await inventoryPage.getCartBadgeCount()
    ).toBe(1);

    // Cart
    await inventoryPage.openCart();

    expect(
        await cartPage.verifyProduct(
            testData.Product.backpack
        )
    ).toBe(true);

    await cartPage.checkout();

    // Checkout Information
    await expect(
        page.getByText('Checkout: Your Information')
    ).toBeVisible();

    await checkoutPage.fillCheckoutInformation(
        testData.Checkout.firstName,
        testData.Checkout.lastName,
        testData.Checkout.postalCode
    );

    await checkoutPage.continue();

    // Overview
    await expect(
        page.getByText('Checkout: Overview')
    ).toBeVisible();

    expect(
        await overviewPage.getProductName()
    ).toBe(testData.Product.backpack);

    await overviewPage.finishOrder();

    // Complete
    await expect(
        completePage.completeHeader
    ).toHaveText('Thank you for your order!');
});