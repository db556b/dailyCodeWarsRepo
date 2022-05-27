// parameters - two objects consisting of fighters with properties of (name, health, damage) and a string with the name of one of the fighter to attack first
// return - returns the winner of the battle
// examples
// PseudoCode


//Two fighters, one winner.
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }


function declareWinner(f1, f2, fa) {
    //declare new variables for who goes first and who goes second
    const one = fa === f1.name ? f1 : f2
    const two = fa !== f1.name ? f1 : f2
    //run loop to perform attacks 
    while (one.health > 0 || two.health > 0){
          two.health -= one.damagePerAttack
          one.health -= two.damagePerAttack
        //check if one of the two fighters have reached a health of 0 and declare winner based on who went first- for times when both are at zero health
      if (one.health < 1 || two.health < 1){
        return two.health < 1 ? one.name : two.name
      }
    }
  }

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")//should return  "Lew");
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")//should return  "Harry");
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")//should return  "Harald")
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")//should return  "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")//should return  "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")//should return  "Harald")