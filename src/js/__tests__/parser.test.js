import json from '../parser';

test('resolves to json()', async () => {
  const input = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(input.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < input.length; i += 1) {
    bufferView[i] = input.charCodeAt(i);
  }

  const received = await json(buffer);
  return expect(received).toEqual(input);
});
