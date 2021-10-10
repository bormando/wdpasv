import Page from '../page';

export default class BasePage extends Page {
    get coursesLink() { return $('div[data-qa="topmenu-Courses"]') }
    get cardsLink() { return $('div[data-qa="topmenu-Cards"]') }
    get diaryLink() { return $('div[data-qa="topmenu-Diary"]') }
    get challengesLink() { return $('div[data-qa="topmenu-Challenges"]') }
}