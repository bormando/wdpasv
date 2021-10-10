import BasePage from './base.page';

class CardsPage extends BasePage{
    get headerItem() { return $('//h1[contains(text(), "cards")]') }
}

export default new CardsPage();