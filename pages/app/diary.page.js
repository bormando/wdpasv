import BasePage from './base.page';

class DiaryPage extends BasePage {
    get headerItem() { return $('//h1[contains(@class, "jumbo-title")][contains(text(), "Diaries")]') }
}

export default new DiaryPage();