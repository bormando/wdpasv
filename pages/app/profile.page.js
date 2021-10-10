import BasePage from './base.page';

class ProfilePage extends BasePage {
    get iconAvatar() { return $('.ant-avatar-square') }

    open() {
        return super.open(`/profile/${process.env.USERID}`);
    }
}

export default new ProfilePage();
