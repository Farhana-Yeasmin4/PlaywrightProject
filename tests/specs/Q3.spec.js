import {test, expect} from "@playwright/test";
import Journey3 from "../pages/journey3.js";

test.describe('Verify the purchase journey 3', () => {
    test('Verify the purchase journey 3 with performance_glitch_user', async ({page}) => {
        const journey3 = new Journey3(page);

        await page.goto('https://www.saucedemo.com/');
        await journey3.enterUserName('performance_glitch_user');
        await journey3.enterPassword('secret_sauce');
        await journey3.clickLoginButton();
        await journey3.clickHamBurgerMenu();
        await journey3.clickResetAppState();
        await journey3.clickBack();
        await journey3.filter();
        await journey3.addProduct();
        await journey3.clickAddToCartIcon();
        await journey3.clickCheckout();
        await journey3.enterFirstName('Farhana');
        await journey3.enterLastName('Yeasmin');
        await journey3.enterPostalCode('1215');
        await journey3.clickContinueButton();

        await expect (page.locator("//div[@data-test='item-quantity']")).toHaveText('1');
        await expect (page.locator("//div[@data-test='inventory-item-name']")).toHaveText('Test.allTheThings() T-Shirt (Red)');
        await expect (page.locator("//div[@data-test='inventory-item-price']")).toHaveText('$15.99');
        await expect (page.locator("//div[@class='summary_subtotal_label']")).toHaveText('Item total: $15.99');
        await expect (page.locator("//div[@class='summary_tax_label']")).toHaveText('Tax: $1.28');
        await expect (page.locator("//div[@class='summary_total_label']")).toHaveText('Total: $17.27');

        await journey3.clickFinishButton();
        await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!');
        await journey3.clickBackHomeButton();
        await journey3.clickHamBurgerMenu();
        await journey3.clickResetAppState();
        await journey3.clickLogout();


    });

});