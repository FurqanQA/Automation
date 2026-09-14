import { test, expect } from "../Fixture/test";
import { testData } from "../Fixture/testData";

test("Complete checkout flow", async ({
  page,
  inventoryPage,
  cartPage,
  checkoutPage,
  overviewPage,
  completePage,
}) => {
  // Inventory

  await page.goto("/inventory.html");

  await expect(page.getByText("Products")).toBeVisible();

  await inventoryPage.addProductToCart(testData.Product.backpack);

  expect(await inventoryPage.getCartBadgeCount()).toBe(1);

  // Cart

  // Cart

  await inventoryPage.openCart();

  await cartPage.expectProductVisible(testData.Product.backpack);

  await cartPage.checkout();

  // Checkout

  await expect(page.getByText("Checkout: Your Information")).toBeVisible();

  await checkoutPage.fillCheckoutInformation(
    testData.Checkout.firstName,
    testData.Checkout.lastName,
    testData.Checkout.postalCode,
  );

  await checkoutPage.continue();

  // Overview

  await expect(page.getByText("Checkout: Overview")).toBeVisible();

  expect(await overviewPage.getProductName()).toBe(testData.Product.backpack);

  await overviewPage.finishOrder();

  // Complete

  expect(await completePage.getCompleteMessage()).toBe(
    "Thank you for your order!",
  );

  console.log(await cartPage.cartItems.count());
  console.log(await cartPage.cartItems.allTextContents());
});
