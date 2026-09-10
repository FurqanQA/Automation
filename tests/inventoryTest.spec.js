import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { InventoryPage } from '../Pages/inventoryPage';
import { testData } from '../Fixture/testData';

test('Add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('/');

    await loginPage.login(
        testData.ValidUser.username,
        testData.ValidUser.password
    );

    await expect(page.getByText('Products')).toBeVisible();

    await inventoryPage.addProduct(
        testData.Product.backpack
    );

    expect(await inventoryPage.getCartBadgeCount()).toBe(1);
});