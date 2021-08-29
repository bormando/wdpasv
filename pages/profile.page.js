import Page from './page';

class ProfilePage extends Page {
    get iconAvatar() { return $('.ant-avatar-square') }
}

export default new ProfilePage();
