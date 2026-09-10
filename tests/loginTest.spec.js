import { LoginPage } from '../Pages/loginPage';
import { test, expect } from '@playwright/test';
import { testData } from '../Fixture/testData';

test('Login Tests', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await loginPage.login(testData.ValidUser.username, testData.ValidUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Login Tests with Invalid Password', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
     await loginPage.login(testData.InvalidUser.username, testData.InvalidUser.password);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login Tests with Empty Credentials', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
     await loginPage.login(testData.EmptyUser.username, testData.EmptyUser.password);
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});
