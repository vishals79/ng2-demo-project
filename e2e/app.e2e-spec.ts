import { Ng2DemoProjectPage } from './app.po';

describe('ng2-demo-project App', function() {
  let page: Ng2DemoProjectPage;

  beforeEach(() => {
    page = new Ng2DemoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
