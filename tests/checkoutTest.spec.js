import { test, expect } from '../Fixture/test';
import { testData } from '../Fixture/testData';

test('Complete checkout flow', async ({
    loggedIn,
    inventoryPage,
    cartPage,
    checkoutPage,
    overviewPage,
    completePage
}) => {

    // Inventory
    await expect(
        loggedIn.getByText('Products')
    ).toBeVisible();

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

    // Checkout
    await expect(
        loggedIn.getByText('Checkout: Your Information')
    ).toBeVisible();

    await checkoutPage.fillCheckoutInformation(
        testData.Checkout.firstName,
        testData.Checkout.lastName,
        testData.Checkout.postalCode
    );

    await checkoutPage.continue();

    // Overview
    await expect(
        loggedIn.getByText('Checkout: Overview')
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