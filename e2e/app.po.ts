import { browser, by, element } from 'protractor';

export class BuzzquizPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bq-root h1')).getText();
  }
}
