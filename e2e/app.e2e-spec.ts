import { BuzzquizPage } from './app.po';

describe('buzzquiz App', () => {
  let page: BuzzquizPage;

  beforeEach(() => {
    page = new BuzzquizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bq works!');
  });
});
