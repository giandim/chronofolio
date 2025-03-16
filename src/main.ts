import { generateMap } from "./map";
import { Player } from "./player";

const TILE_SIZE = 16;

let xSize = document.documentElement.clientWidth;
let ySize = Math.max(document.documentElement.clientHeight, window.innerHeight) - TILE_SIZE;

const forestTileset = new Image();
forestTileset.src = './forests.png';

forestTileset.onload = gameLoop;

var r = document.querySelector(":root") as HTMLElement;
var rs = getComputedStyle(r);

r.style.setProperty('--col-number', Math.round(xSize / TILE_SIZE) + "")

//const grid = Array.from({ length: Math.round(ySize / TILE_SIZE) }, () => Array(Math.round(xSize / TILE_SIZE)).fill(0));
window.onload = createGrid;
const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const player = new Player()

createCanvas();

function createCanvas() {
  // Set the "actual" size of the canvas
  canvas.width = 800;
  canvas.height = 600;

  // Set the "drawn" size of the canvas
  canvas.style.width = `${800}px`;
  canvas.style.height = `${600}px`;
  if (ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.scale(3, 3)
  }

  createGrid()
}

function gameLoop() {
  ctx?.save()
  ctx?.fillRect(player.position.x, player.position.y, TILE_SIZE, TILE_SIZE * 2);
  ctx?.translate(player.position.x, player.position.y);
  ctx?.restore()
  window.requestAnimationFrame(gameLoop)
}

gameLoop()


window.addEventListener("keydown", (e) => {
  player.move(e.key);
})

function createGrid() {
  const grid = generateMap()
  for (let y = 0; grid.tiles.length > y; y++) {
    for (let x = 0; grid.tiles[0].length > x; x++) {
      ctx?.drawImage(forestTileset, TILE_SIZE * 2, TILE_SIZE * 1, TILE_SIZE * 1, TILE_SIZE * 1, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}
