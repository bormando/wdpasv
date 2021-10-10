import BasePage from './base.page';

class CoursesPage extends BasePage {
    get headerItem() { return $('//h1[.="Interactive Courses"]') }
}

export default new CoursesPage();