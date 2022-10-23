

//Problem: 

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.



//Solution:

combat = (health, damage) => damage > health ? 0 : health - damage

//or

function combat(health, damage) {
    if (health - damage < 0){
      return 0;
    }else{
      return health - damage;
    }
}

//or

function combat(health, damage) {
    return health < damage ? 0 : health - damage
}

