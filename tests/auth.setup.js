import { test as setup } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { testData } from '../Fixture/testData';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        testData.ValidUser.username,
        testData.ValidUser.password
    );

    await page.context().storageState({
        path: authFile
    });
});