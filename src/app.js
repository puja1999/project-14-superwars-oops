const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
  ];
  
  // Player Class
  class Player {
    constructor(id, name, type) {
      // Create member variables and assign values
      // Type your code
      this.id = id;
      this.name = name;
      this.type = type;
      this.strength = this.getRandomStrength();
      this.image = "images/super-" + (id + 1) + ".png";
    }
  
    // getting random strength
    getRandomStrength = () => {
      return Math.ceil(Math.random() * 100);
    };
  
    // Create a player for displaying
    view = () => {
      // Accumulate HTML template
      // Type your code here
      let divTag = document.createElement("div");
      let player = `<div class="player" data-id="${this.id}">
          <img src="${this.image}">
          <div class="name">${this.name}</div>
          <div class="strength">${this.strength}</div>
          </div>`;
      divTag.innerHTML = player;
      return divTag.firstChild;
    };
  }
  
  // Superwar Class
  class Superwar {
    constructor(players) {
      // Create a field players
      // Use Map method to loop through players argument and create new players
      // Type your code here
      this.players = players.map((player, value) => {
        if (value % 2 == 0) {
          return new Player(value, player, "hero");
        } else {
          return new Player(value, player, "villain");
        }
      });
    }
  
    // Display players in HTML
    viewPlayers = () => {
      let team = document.getElementById("heroes");
      team.innerHTML = "";
      let fragment = this.buildPlayers("hero");
      team.append(fragment);
  
      team = document.getElementById("villains");
      team.innerHTML = "";
      fragment = this.buildPlayers("villain");
      team.append(fragment);
    };
  
    // Build players fragment
    buildPlayers = (type) => {
      let fragment = document.createDocumentFragment();
      this.players
        .filter((player) => player.type == type)
        .forEach((player) => fragment.append(player.view()));
      return fragment;
    };
  }
  
  window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
  };
  