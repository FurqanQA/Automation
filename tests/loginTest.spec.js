import { LoginPage } from '../Pages/loginPage';
import { test, expect } from '@playwright/test';

test('Login Tests', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Login Tests with Invalid Password', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('SECRET_SAUCE');
    await loginPage.clickLoginButton();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});

test('Login Tests with Empty Credentials', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await loginPage.enterUsername('');
    await loginPage.enterPassword('');
    await loginPage.clickLoginButton();
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});
