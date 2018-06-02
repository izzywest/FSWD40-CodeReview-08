import { Coderev8onePage } from './app.po';

describe('coderev8one App', () => {
  let page: Coderev8onePage;

  beforeEach(() => {
    page = new Coderev8onePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
