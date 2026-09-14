import { test, expect } from '../Fixture/test';
import { testData } from '../Fixture/testData';

test('Add product to cart', async ({
    page,
    inventoryPage
}) => {

    await page.goto('/inventory.html');

    await expect(
        page.getByText('Products')
    ).toBeVisible();

    await inventoryPage.addProductToCart(
        testData.Product.backpack
    );

    expect(
        await inventoryPage.getCartBadgeCount()
    ).toBe(1);
});