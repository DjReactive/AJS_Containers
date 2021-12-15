export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) { throw new Error('Такой персонаж уже имеется в команде'); }

    this.members.add(character);
  }

  addAll(...objs) {
    objs.forEach((obj) => this.members.add(obj));
  }

  toArray() {
    return [...this.members];
  }
}
