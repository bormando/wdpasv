import axios from 'axios';

async function addCommands() {
    await browser.addCommand('smartClear', async function () {
        const value = await this.getValue();
        for await (let character of value) {
            await this.keys(['Backspace']);
        }
    }, true);

    await browser.addCommand('logIn', async function () {
        await this.url('/');
        await this.execute(function(token, userId) {
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('userId', userId);
        }, process.env.TOKEN, process.env.USERID)
    }, false);
}

async function getAuthData() {
    const url = `${process.env.API_BASE_URL}/user/login`;
    const body = {
        email: process.env.LOGIN,
        password: process.env.PASSWORD
    };
    await axios.post(url, body)
        .then((res) => {
            process.env.TOKEN = res.data.token;
            process.env.USERID = res.data.userId;
        });
}

export { addCommands, getAuthData };