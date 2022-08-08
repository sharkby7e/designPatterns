class Settings {
  static instance: Settings;
  public readonly mode = "dark";

  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}

const settingsFail = new Settings();
const settingsPass = Settings.getInstance();
