import Page from './page';

class LoginPage extends Page {
    get inputEmail() { return $('#normal_login_email') }
    get inputPassword() { return $('#normal_login_password') }
    get buttonLogIn() { return $('.login-form-button') }
    get notification() { return $('.ant-notification-notice-message') }
    get emailValidation() { return $('//div[contains(@class, "ant-form-item-with-help")][div//input[@id="normal_login_email"]]//div[@role="alert"]') }
    get passwordValidation() { return $('//div[contains(@class, "ant-form-item-with-help")][div//input[@id="normal_login_password"]]//div[@role="alert"]') }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogIn.click();
    }

    open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();
