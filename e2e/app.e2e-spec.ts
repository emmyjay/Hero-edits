import { HeroEditsPage } from './app.po';

describe('hero-edits App', () => {
  let page: HeroEditsPage;

  beforeEach(() => {
    page = new HeroEditsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
