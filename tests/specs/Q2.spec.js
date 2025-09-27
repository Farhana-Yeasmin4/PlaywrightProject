import {test, expect} from '@playwright/test';
import Journey2 from '../pages/journey2.js';

test.describe('Verify the Purchase Journey', () => {
    test('Verify the Purchase Journey with standard_user', async ({page}) => {
        const journey2 = new Journey2(page);
        await page.goto('https://www.saucedemo.com/');
        
        await journey2.enterUserName('standard_user');
        await journey2.enterPassword('secret_sauce');
        await journey2.clickLoginButton();
        await journey2.clickHamBurgerMenu();
        await journey2.clickResetAppState();
        await journey2.clickBack();
        await journey2.addToCart1();     
        await journey2.addToCart2();
        await journey2.addToCart3();
        await journey2.clickAddToCartIcon();
        await journey2.clickCheckout();
        await journey2.enterFirstName('Farhana');
        await journey2.enterLastName('Yeasmin');
        await journey2.enterPostalCode('1215');
        await journey2.clickContinueButton();


        await expect (page.locator("//div[@data-test='inventory-item-name']")).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light']);
        await expect (page.locator("//div[@data-test='inventory-item-price']")).toHaveText(['$29.99', '$15.99', '$9.99']);

       
        await expect (page.locator("//div[@class='summary_subtotal_label']")).toHaveText('Item total: $55.97');
        await expect (page.locator("//div[@class='summary_tax_label']")).toHaveText('Tax: $4.48');
        await expect (page.locator("//div[@class='summary_total_label']")).toHaveText('Total: $60.45');
        
        await journey2.clickFinishButton();
        await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!');
        
        await journey2.clickBackHomeButton();
        await journey2.clickHamBurgerMenu();
        await journey2.clickResetAppState();
        await journey2.clickLogout();

    });
});