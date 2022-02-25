import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => console.log(saving), (err) => console.log('Ошибка', err));
