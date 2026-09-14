import { test, expect } from '../Fixture/test';
import { testData } from '../Fixture/testData';

test('Login with valid credentials', async ({
    page,
    loginPage
}) => {

    await page.goto('/');

    await expect(
        page.getByText('Swag Labs')
    ).toBeVisible();

    await loginPage.login(
        testData.ValidUser.username,
        testData.ValidUser.password
    );

    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );

    await expect(
        page.getByText('Products')
    ).toBeVisible();
});


test('Login with invalid password', async ({
    page,
    loginPage
}) => {

    await page.goto('/');

    await loginPage.login(
        testData.InvalidUser.username,
        testData.InvalidUser.password
    );

    await expect(
        page.getByText(
            'Epic sadface: Username and password do not match any user in this service'
        )
    ).toBeVisible();
});


test('Login with empty credentials', async ({
    page,
    loginPage
}) => {

    await page.goto('/');

    await loginPage.login(
        testData.EmptyUser.username,
        testData.EmptyUser.password
    );

    await expect(
        page.getByText(
            'Epic sadface: Username is required'
        )
    ).toBeVisible();
});