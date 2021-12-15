import * as ch from './character';
import Team from './app';

const swordsman = new ch.Swordsman('Swordsman');
const magician = new ch.Magician('Magician');
const undead = new ch.Undead('Undead');
const daemon = new ch.Daemon('Daemon');
const zombie = new ch.Zombie('Zombie');
const bowerman = new ch.Bowerman('Bowerman');

const team = new Team();
const set = new Set();

test('Team Add one character ', () => {
  team.add(daemon);
  set.add(daemon);
  expect(team.members).toEqual(set);
});
test('Team Add one character (Dublicate)', () => {
  const t = () => team.add(daemon);
  expect(t).toThrow(new Error('Такой персонаж уже имеется в команде'));
});
test('Team Add All character ', () => {
  team.addAll(swordsman, magician, undead, undead, bowerman, zombie);
  set.add(swordsman);
  set.add(magician);
  set.add(undead);
  set.add(bowerman);
  set.add(zombie);
  expect(team.members).toEqual(set);
});
test('Set convertation to Array ', () => {
  expect(team.toArray()).toEqual([...team.members]);
});
