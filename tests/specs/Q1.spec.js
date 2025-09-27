import { test, expect } from "@playwright/test";
import Journey1 from "../pages/journey1.js";

test.describe("Verify the login", () => {
    test("Verify the login with locked_out_user", async ({ page }) => {
        const journey1 = new Journey1(page);
        await page.goto("https://www.saucedemo.com/");
        await journey1.enterUsername("locked_out_user");
        await journey1.enterPassword("secret_sauce");
        await journey1.clickLoginButton();

        await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        await page.waitForTimeout(2000);
    });
});