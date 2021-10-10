import ProfilePage from '../pages/app/profile.page';
import CoursesPage from '../pages/app/courses.page';
import CardsPage from '../pages/app/cards.page';
import DiaryPage from '../pages/app/diary.page';
import ChallengesPage from '../pages/app/challenges.page';

describe('Navigation', function() {
    before(async function() {
        await browser.logIn();
        await ProfilePage.open();
    });

    it('Courses module opens', async function() {
        await ProfilePage.coursesLink.click();
        await expect(browser).toHaveUrlContaining('/course');
        await expect(CoursesPage.headerItem).toBeDisplayed();
    });

    it('Cards module opens', async function() {
        await ProfilePage.cardsLink.click();
        await expect(browser).toHaveUrlContaining('/flash');
        await expect(CardsPage.headerItem).toBeDisplayed();
    });

    it('Diary module opens', async function() {
        await ProfilePage.diaryLink.click();
        await expect(browser).toHaveUrlContaining('/diary');
        await expect(DiaryPage.headerItem).toBeDisplayed();
    });

    it('Challenges module opens', async function() {
        await ProfilePage.challengesLink.click();
        expect(browser).toHaveUrlContaining('/challenge');
        await expect(ChallengesPage.headerItem).toBeDisplayed();
    });
});
