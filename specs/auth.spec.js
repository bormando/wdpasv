import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/app/profile.page';

describe('Auth', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('successful log in', async () => {
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });

    it('wrong credentials throws error', async () => {
        await LoginPage.login('invalid@example.com', 'invalid');
        await expect(LoginPage.notification).toHaveTextContaining('Auth failed');
    });

    it('email format validation', async () => {
        await LoginPage.inputEmail.setValue('invalid');
        await expect(LoginPage.emailValidation).toHaveTextContaining('\'email\' is not a valid email');
    });

    it('email required validation', async () => {
        await LoginPage.inputEmail.setValue('invalid@example.com');
        await LoginPage.inputEmail.smartClear();
        await expect(LoginPage.emailValidation).toHaveTextContaining('Required');
    });

    it('password required validation', async () => {
        await LoginPage.inputPassword.setValue('invalid');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordValidation).toHaveTextContaining('Required');
    });
});
