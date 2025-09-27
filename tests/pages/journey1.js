import { Q1 } from '../pageObjects/Q1.js';

export default class Journey1 {
    constructor(page) {
        this.page = page;
        this.q1 = new Q1(page);
    }

    async enterUsername(username) {
        await this.q1.username.fill(username);
    }

    async enterPassword(password) {
        await this.q1.password.fill(password);
    }

    async clickLoginButton() {
        await this.q1.enterLoginButton.click();
    }
}