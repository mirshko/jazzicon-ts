import jazzicon from '../src';

describe('jazzicon', () => {
  it('should generate div with a child element', () => {
    const div = jazzicon(32, 1);

    expect(div.firstChild).toBeTruthy();
  });
});
