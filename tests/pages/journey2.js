import { Q2 } from "../pageObjects/Q2.js";

export  default class Journey2 {
    constructor(page) {
        this.page = page;
        this.q2 = new Q2(page);
    }
    async enterUserName(username) {
        await this.q2.username.fill(username);
    }

    async enterPassword(password) {
        await this.q2.password.fill(password);
        
    }

    async clickLoginButton() {
        await this.q2.enterLoginButton.click();
    }

    async clickHamBurgerMenu() {
        await this.q2.hamBurgerMenu.click();
    }

    async clickResetAppState() {
        await this.q2.resetAppState.click();
    }

    async clickBack() {
        await this.q2.back.click();
    }

    async addToCart1() {
        await this.q2.addToCart1.click();
    }

    async addToCart2() {
        await this.q2.addToCart2.click();
    }

    async addToCart3() {
        await this.q2.addToCart3.click();
    }   

    async clickAddToCartIcon() {
        await this.q2.addToCartIcon.click();
    }

    async clickCheckout() {
        await this.q2.checkout.click();
    }

    async enterFirstName(firstName) {
        await this.q2.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.q2.lastName.fill(lastName);
    }   

    async enterPostalCode(postalCode) {
        await this.q2.postalCode.fill(postalCode);
    }

    async clickContinueButton() {
        await this.q2.continueButton.click();
    }

    async clickFinishButton() {
        await this.q2.finishButton.click();
    }

    async clickBackHomeButton() {
        await this.q2.backHomeButton.click();
    }

    async clickLogout() {
        await this.q2.logout.click();
    }

}