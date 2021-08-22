export default class Page {
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
