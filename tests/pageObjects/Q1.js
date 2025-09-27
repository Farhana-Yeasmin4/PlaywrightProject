export  class Q1 {
    constructor(page){
        this.page = page;

        this.username = page.locator("(//input[@class='input_error form_input'])[1]");
        this.password = page.locator("(//input[@class='input_error form_input'])[2]");
        this.enterLoginButton = page.locator("//input[@class='submit-button btn_action']");
    }
}