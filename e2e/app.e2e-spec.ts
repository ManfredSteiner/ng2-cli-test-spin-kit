import { Ng2CliTestSpinKitPage } from './app.po';

describe('ng2-cli-test-spin-kit App', () => {
  let page: Ng2CliTestSpinKitPage;

  beforeEach(() => {
    page = new Ng2CliTestSpinKitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
