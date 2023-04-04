/*Object Literals*/

/*
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP.`
    }
}

//aurora is harmed by an arrow
aurora.health -= 10;
//aurora gains a necklace of strength
aurora.strength += 10;
//aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());
*/

/*
const glacius = {
    name: "Glacius",
    health: 130,
    strength: 30,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} XP.`
 }}

 console.log(glacius.describe());
*/



 /*
 Our two characters are strikingly similar. They share the same properties, with the only difference being some property values.

 To get the code more DRY, use a class constructor

 */


/*Create a class*/
/*
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; //xp starts at 0 for new players. (use local storage for returning players)
    }

    describe() {
        return `Your ccharacter, ${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} XP points remaining.`
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log(aurora.describe());
console.log(glacius.describe());
*/




/*

const anObject = {
    myProperty: 2
};

//create another object using anObject as a prototype

const anotherObject = Object.create(anObject)

console.log(anotherObject.myProperty); // 2

*/



/*
 const anObject = {
    myProp: 2
  };
  
  // Create anotherObject using anObject as a prototype
  const anotherObject = Object.create(anObject);
  
  // Create yetAnotherObject using anotherObject as a prototype
  const yetAnotherObject = Object.create(anotherObject);
  
  // myProp is found in yetAnotherObject's prototype chain (in anObject)
  console.log(yetAnotherObject.myProp); // 2
  
  // myOtherProp can’t be found in yetAnotherObject's prototype chain
  console.log(yetAnotherObject.myOtherProp); // undefined

*/

/*
class Character {
    constructor(name,health ,strength) {
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
    }

    //attack a target
    attack(target) {
        if(this.health > 0) {
            const damage = this.strength
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`)

            target.health -= damage

            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`)
            }

            else {
                target.health = 0;
                const bonusXP = 10;
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`)
                this.xp = bonusXP;
            }  
        }

        else {
            console.log(`${this.name} can’t attack (they've been eliminated)`)
        } 
    }

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
}




const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

*/


/*
DOGS

complete the following program to add the definition of the dog to class

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

*/

class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }

    bark() {
        if(this.size > 60) {
            return `Grrr Grrr`
        }
        else {
            return `woof woof`
        }
    }
   
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);





/*
Character Inventory

Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.
*/

class Character {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
        this.gold = 10
        this.key = 1
    }

    //attack a target
    attack(target) {
        if(this.health > 0) {
            const damage = this.strength
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`)

            target.health -= damage

            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`)
            }

            else {
                target.health = 0;
                const bonusXP = 10;
                const gold = 10;
                const key = 1;
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold pieces and ${this.key} key(s)`)

                this.xp += bonusXP
                this.gold += gold
                this.key += key
            }  
            
        }

        else {
            console.log(`${this.name} can’t attack (they've been eliminated)`)
        }
        
    }

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold pieces and ${this.key} key(s)`
    }
}




const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());




/*
Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
*/

class Account {
    constructor(name) {
        this.name = name
        this.balance = 0
    }

    credit(amount) {
        this.balance += amount
    }

    describe() {
        return `name: ${this.name}, balance: $${this.balance}`
    }
}

const accountList = []
accountList.push(new Account('Sean'))
accountList.push(new Account('Brad'))
accountList.push(new Account('Georges'))

accountList.forEach(account => {
    account.credit(1000)
    console.log(account.describe())
})