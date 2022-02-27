import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('resolves to GameSavingLoader', async () => {
  const received = await GameSavingLoader.load();
  return expect(received).toEqual(new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  }));
});
