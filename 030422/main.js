
// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(h, d) {
    const t = h - d
    return t < 0 ? 0 : t
  }


  const combat2 = (h, d) => Math.max(0, h - d);