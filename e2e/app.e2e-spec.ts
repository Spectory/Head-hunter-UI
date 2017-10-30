import { AngularReduxTemplatePage } from './app.po';

describe('workships3 App', () => {
  let page: AngularReduxTemplatePage;

  beforeEach(() => {
    page = new AngularReduxTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
