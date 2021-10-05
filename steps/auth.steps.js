import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

Given(/^login page is open$/, async () => {
    await LoginPage.open();
});

When(/^I log in with (.*) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^I set email (.*)$/, async (email) => {
    await LoginPage.inputEmail.setValue(email);
});

When(/^I clear email input field$/, async () => {
    await LoginPage.inputEmail.smartClear();
});

When(/^I set password (.*)$/, async (password) => {
    await LoginPage.inputPassword.setValue(password);
});

When(/^I clear password input field$/, async () => {
    await LoginPage.inputPassword.clearValue();
});

Then(/^I should be redirected to my profile page$/, async () => {
    await expect(ProfilePage.iconAvatar).toBeDisplayed();
});

Then(/^I should see notification about failed auth$/, async () => {
    await expect(LoginPage.notification).toHaveTextContaining('Auth failed');
});

Then(/^email validation error appears$/, async () => {
    await expect(LoginPage.emailValidation).toHaveTextContaining('\'email\' is not a valid email');
});

Then(/^email required error appears$/, async () => {
    await expect(LoginPage.emailValidation).toHaveTextContaining('Required');
});

Then(/^password required error appears$/, async () => {
    await expect(LoginPage.passwordValidation).toHaveTextContaining('Required');
});