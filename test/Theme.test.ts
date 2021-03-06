import theme from '../src/lib/Theme';

describe('Theme.js', () => {
  const parentTheme = {
    abc: '123',
  };
  test('Test theme returns parent properties', () => {
    expect(theme(parentTheme)).toMatchObject(parentTheme);
  });
});
