import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../Pages/loginPage';
import { InventoryPage } from '../Pages/inventoryPage';
import { CartPage } from '../Pages/cartPage';
import { CheckoutPage } from '../Pages/checkoutPage';
import { OverviewPage } from '../Pages/overviewPage';
import { CompletePage } from '../Pages/completePage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    overviewPage: async ({ page }, use) => {
        await use(new OverviewPage(page));
    },

    completePage: async ({ page }, use) => {
        await use(new CompletePage(page));
    }

});

export { expect };