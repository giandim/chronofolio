import { Camera } from "./camera";
import { TILE_SIZE } from "./constants";
import { Map } from "./map";

export class Game {
  ctx: CanvasRenderingContext2D;
  camera: Camera;
  map: Map;

  constructor(ctx: CanvasRenderingContext2D, camera: Camera, map: Map) {
    this.ctx = ctx;
    this.camera = camera;
    this.map = map;
  }

  render() {
    const startCol = Math.floor(this.camera.position.x / TILE_SIZE);
    const endCol = startCol + Math.floor(this.camera.width / TILE_SIZE);
    const startRow = Math.floor(this.camera.position.y / TILE_SIZE);
    const endRow = startRow + Math.floor(this.camera.height / TILE_SIZE);
    const offsetX = -this.camera.position.x + startCol * TILE_SIZE;
    const offsetY = -this.camera.position.y + startRow * TILE_SIZE;

    this.map.layers[0][0] = 8;
    for (let y = startRow; y <= endRow; y++) {
      for (let x = startCol; x <= endCol; x++) {
        const tilesetImage = this.map.getTilesetImage(1);

        const dx = (x - startCol) * TILE_SIZE + offsetX;
        const dy = (y - startRow) * TILE_SIZE + offsetY;

        this.ctx?.drawImage(
          tilesetImage,
          (this.map.layers[y][x] - 1) * TILE_SIZE % tilesetImage.width,
          Math.floor((this.map.layers[y][x] - 1) / 10) * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE,
          Math.round(dx),
          Math.round(dy),
          TILE_SIZE,
          TILE_SIZE);
      }
    }
  }
}
