const STATE_KEY_PREFIX = '@@scroll|';

export default class SessionStorage {
  static read(location, key) {
    const stateKey = SessionStorage.getStateKey(location, key);
    const value = sessionStorage.getItem(stateKey);
    return JSON.parse(value);
  }

  static save(location, key, value) {
    const stateKey = SessionStorage.getStateKey(location, key);
    const storedValue = JSON.stringify(value);
    sessionStorage.setItem(stateKey, storedValue);
  }

  static getStateKey(location, key) {
    const locationKey = location.key;
    const stateKeyBase = `${STATE_KEY_PREFIX}${locationKey}`;
    return key ? stateKeyBase : `${stateKeyBase}|${key}`;
  }
}
