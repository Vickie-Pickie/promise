import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((buffer) => json(buffer))
        .then((value) => JSON.parse(value))
        .then((saving) => resolve(saving))
        .catch((err) => reject(err));
    });
  }
}
