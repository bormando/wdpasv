import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('xonol63306@gameqo.com', 'Qwerty!23');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});
