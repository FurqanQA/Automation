import { LoginPage } from '../Pages/loginPage';
import { test, expect } from '@playwright/test';

test('Login Tests', async({page}) => {

    let loginPage = new LoginPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});