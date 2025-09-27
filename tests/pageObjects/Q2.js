export class Q2 {
    constructor(page){
        this.page = page;

        this.username = page.locator("(//input[@class='input_error form_input'])[1]");
        this.password = page.locator("(//input[@class='input_error form_input'])[2]");
        this.enterLoginButton = page.locator("//input[@class='submit-button btn_action']");
        this.hamBurgerMenu = page.locator("//div[@class='bm-burger-button']//button[1]");
        this.resetAppState = page.locator("//a[@data-test='reset-sidebar-link']");
        this.back = page.locator("//div[@class='bm-cross-button']//button[1]");
        this.addToCart1 = page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']");
        this.addToCart2 = page.locator("//button[@data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
        this.addToCart3 = page.locator("//button[@data-test='add-to-cart-sauce-labs-bike-light']");
        this.addToCartIcon =page.locator("//a[@class='shopping_cart_link']");
        this.checkout =page.locator("//button[contains(@class,'btn btn_action')]");
        this.firstName = page.locator("//input[@data-test='firstName']");
        this.lastName = page.locator("//input[@data-test='lastName']");
        this.postalCode = page.locator("//input[@data-test='postalCode']");
        this.continueButton = page.locator("//input[@data-test='continue']");
        this.finishButton = page.locator("//button[@data-test='finish']");
        this.backHomeButton = page.locator("//button[@data-test='back-to-products']");
        this.logout = page.locator("//a[@data-test='logout-sidebar-link']");
        
    }
}