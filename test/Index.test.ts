import Index from '../src/plugin/Index';
import App from '../src/plugin/App';

describe('Index.js', () => {
  test('Test module exports correct objects', () => {
    expect(Index).toBe(App);
  });
});
