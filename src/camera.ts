import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";
import { Vector2 } from "./vector2";

export class Camera {
  position: Vector2;
  width: number;
  height: number;

  constructor(position: Vector2 = { x: 0, y: 0 }, width: number = SCREEN_WIDTH, height: number = SCREEN_HEIGHT) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  update(position: Vector2) {
    this.position.x = position.x
    this.position.y = position.y
  }
}
