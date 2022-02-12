
// Grasshopper - Create the rooms
// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).


class Room {
    constructor(name, description,completed){
      this.name = name
      this.description = description
      this.completed = completed
    }
  }
  const room1 = new Room('one', 'red', false)
  const room2 = new Room('two', 'blue', false)
  const room3 = new Room('three', 'green', false)
  var rooms = {
    room1,room2,room3
  }