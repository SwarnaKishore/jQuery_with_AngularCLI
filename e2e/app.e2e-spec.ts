import { JQueryPage } from './app.po';

describe('j-query App', () => {
  let page: JQueryPage;

  beforeEach(() => {
    page = new JQueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
