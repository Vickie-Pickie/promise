import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((value) => JSON.parse(value))
      .then((data) => new GameSaving(data));
  }
}
