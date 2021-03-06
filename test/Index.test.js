import Index from '../lib/Index';
import App from '../lib/App';

describe('Index.js', () => {
  test('Test module exports correct objects', () => {
    expect(Index).toBe(App);
  });
});
