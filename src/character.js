const gameClasses = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

export function SetSettings(prop, health, level, attack, defence) {
  prop.health = health;
  prop.level = level;
  prop.attack = attack;
  prop.defence = defence;
}

export class Character {
  constructor(name, type) {
    if (!this.validate(name, type)) throw new Error('Некорректные аргументы');
  }

  validate(name, type) {
    if (name.length > 10 || name.length < 2) return false;
    if (!gameClasses.some((a) => a === type)) return false;

    this.name = name;
    this.type = type;

    return true;
  }
}

export class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    SetSettings(this, 100, 1, 25, 25);
  }
}
export class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    SetSettings(this, 100, 1, 40, 10);
  }
}
export class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    SetSettings(this, 100, 1, 10, 40);
  }
}
export class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    SetSettings(this, 100, 1, 25, 25);
  }
}
export class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    SetSettings(this, 100, 1, 40, 10);
  }
}
export class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    SetSettings(this, 100, 1, 10, 40);
  }
}
