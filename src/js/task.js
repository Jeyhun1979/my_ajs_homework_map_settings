export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setSetting(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
