import { ShopingapptestPage } from './app.po';

describe('shopingapptest App', () => {
  let page: ShopingapptestPage;

  beforeEach(() => {
    page = new ShopingapptestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
