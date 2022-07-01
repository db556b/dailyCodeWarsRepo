
// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated


var Ghost = function() {
    const roll = Math.floor(Math.random() * 4)
    this.color = roll === 0 ? 'white' : roll === 1 ? 'yellow' : roll === 2 ? 'purple' : 'red'
  };