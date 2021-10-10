import BasePage from './base.page';

class ChallengesPage extends BasePage {
    get headerItem() { return $('//h1[contains(@class, "jumbo-title")][contains(text(), "challenges")]') }
}

export default new ChallengesPage();