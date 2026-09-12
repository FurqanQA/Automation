import { test, expect } from '../Fixture/test';
import { testData } from '../Fixture/testData';

test('Add product to cart', async ({ loggedIn, inventoryPage }) => {

    await expect(loggedIn.getByText('Products')).toBeVisible();

    await inventoryPage.addProduct(
        testData.Product.backpack
    );

    expect(
        await inventoryPage.getCartBadgeCount()
    ).toBe(1);
});