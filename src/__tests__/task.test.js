import Settings from '../js/task';

describe('Settings', () => {
  test('should return default settings by default', () => {
    const settings = new Settings();

    expect(settings.settings).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]));
  });

  test.each([
    ['theme', 'light'],
    ['music', 'pop'],
    ['difficulty', 'hard'],
  ])('should override default setting %s with value %s', (key, value) => {
    const settings = new Settings();
    settings.setSetting(key, value);

    expect(settings.settings.get(key)).toBe(value);
  });

  test('should allow adding completely new custom setting', () => {
    const settings = new Settings();
    settings.setSetting('language', 'ru');

    expect(settings.settings.get('language')).toBe('ru');
  });
});
