import jazzicon from '../src';

describe('jazzicon', () => {
  it('has a div container', () => {
    const div = jazzicon(10, 1);

    expect(div.children).toHaveLength(1);
  });
});
