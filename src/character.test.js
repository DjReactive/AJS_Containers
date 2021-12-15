import * as ch from './character';

test('Character Class Error (No type) ', () => {
  const t = () => new ch.Character('Daemon', 'Test');
  expect(t).toThrow(new Error('Некорректные аргументы'));
});
test('Character Class Error (Invalid Name)', () => {
  const t = () => new ch.Character('DaemonTestSword', 'Swordsman');
  expect(t).toThrow(new Error('Некорректные аргументы'));
});
