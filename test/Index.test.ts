import Index from '../src/lib/Index';
import App from '../src/lib/App';

describe('Index.js', () => {
  test('Test module exports correct objects', () => {
    expect(Index).toBe(App);
  });
});
