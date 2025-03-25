import { Camera } from "./camera";
import { SCREEN_HEIGHT, SCREEN_WIDTH, TILE_SIZE } from "./constants";
import { Game } from "./game";
import { generateMap, Map } from "./map";
import { Player } from "./player";

window.onload = createGrid;

const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const player = new Player()
const camera = new Camera();
const map = new Map();
const game = new Game(ctx!, camera, map);

createCanvas();

function createCanvas() {
  // Set the "actual" size of the canvas
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  // Set the "drawn" size of the canvas
  if (ctx) {
    ctx.imageSmoothingEnabled = false;
  }

  createGrid();
}

game.render();

function gameLoop() {
  ctx?.clearRect(0, 0, canvas.width - 64, canvas.height - 64);
  game.render()

  ctx?.fillRect(player.position.x, player.position.y, TILE_SIZE, TILE_SIZE * 2);

  window.requestAnimationFrame(gameLoop)
}

gameLoop()

window.addEventListener("keydown", (e) => {
  player.move(e.key);
  camera.update(player.position);
})

function createGrid() {
  const grid = generateMap()
}
