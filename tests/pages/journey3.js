import { Q3 } from '../pageObjects/Q3.js';

export default class Journey3 {
    constructor(page){
        this.page = page;
        this.q3 = new Q3(page);
    }

   async enterUserName(username) {
        await this.q3.username.fill(username);
    }

    async enterPassword(password) {
        await this.q3.password.fill(password);
        
    }

    async clickLoginButton() {
        await this.q3.enterLoginButton.click();
    }

    async clickHamBurgerMenu() {
        await this.q3.hamBurgerMenu.click();
    }

    async clickResetAppState() {
        await this.q3.resetAppState.click();
    }

    async clickBack() {
        await this.q3.back.click();
    }

    async filter() {
        await this.q3.filterButton.selectOption('za');
    }


    async addProduct() {
        await this.q3.addProduct.click();
    }

    async clickAddToCartIcon() {
        await this.q3.addToCartIcon.click();
    }

     async clickCheckout() {
        await this.q3.checkout.click();
    }

    async enterFirstName(firstName) {
        await this.q3.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.q3.lastName.fill(lastName);
    }   

    async enterPostalCode(postalCode) {
        await this.q3.postalCode.fill(postalCode);
    }

    async clickContinueButton() {
        await this.q3.continueButton.click();
    }

    async clickFinishButton() {
        await this.q3.finishButton.click();
    }

    async clickBackHomeButton() {
        await this.q3.backHomeButton.click();
    }

    async clickLogout() {
        await this.q3.logout.click();
    }

}