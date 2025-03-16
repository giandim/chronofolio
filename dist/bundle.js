"use strict";
(() => {
  // src/constants.ts
  var TILE_SIZE = 16;
  var MAP_SIZE = 48;

  // src/map.ts
  function generateMap() {
    return {
      tiles: Array.from(
        { length: MAP_SIZE },
        () => Array.from({ length: MAP_SIZE }, () => ({ isBlocking: false, layers: [{ materialId: 1, tileId: 1 }] }))
      )
    };
  }

  // src/player.ts
  var Player = class {
    constructor() {
      this.position = { x: TILE_SIZE, y: TILE_SIZE };
    }
    move(key) {
      switch (key) {
        case "w":
          this.position.y -= 2;
          break;
        case "a":
          this.position.x -= 2;
          break;
        case "s":
          this.position.y += 2;
          break;
        case "d":
          this.position.x += 2;
          break;
      }
    }
  };

  // src/main.ts
  var TILE_SIZE2 = 16;
  var xSize = document.documentElement.clientWidth;
  var ySize = Math.max(document.documentElement.clientHeight, window.innerHeight) - TILE_SIZE2;
  var forestTileset = new Image();
  forestTileset.src = "./forests.png";
  forestTileset.onload = gameLoop;
  var r = document.querySelector(":root");
  var rs = getComputedStyle(r);
  r.style.setProperty("--col-number", Math.round(xSize / TILE_SIZE2) + "");
  window.onload = createGrid;
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  var player = new Player();
  createCanvas();
  function createCanvas() {
    canvas.width = 800;
    canvas.height = 600;
    canvas.style.width = `${800}px`;
    canvas.style.height = `${600}px`;
    if (ctx) {
      ctx.imageSmoothingEnabled = false;
      ctx.scale(3, 3);
    }
    createGrid();
  }
  function gameLoop() {
    ctx?.save();
    ctx?.fillRect(player.position.x, player.position.y, TILE_SIZE2, TILE_SIZE2 * 2);
    ctx?.translate(player.position.x, player.position.y);
    ctx?.restore();
    window.requestAnimationFrame(gameLoop);
  }
  gameLoop();
  window.addEventListener("keydown", (e) => {
    player.move(e.key);
  });
  function createGrid() {
    const grid = generateMap();
    for (let y = 0; grid.tiles.length > y; y++) {
      for (let x = 0; grid.tiles[0].length > x; x++) {
        ctx?.drawImage(forestTileset, TILE_SIZE2 * 2, TILE_SIZE2 * 1, TILE_SIZE2 * 1, TILE_SIZE2 * 1, x * TILE_SIZE2, y * TILE_SIZE2, TILE_SIZE2, TILE_SIZE2);
      }
    }
  }
})();
