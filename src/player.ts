import { TILE_SIZE } from './constants';
import { Vector2 } from './vector2';

export class Player {
  position: Vector2;

  constructor() {
    this.position = { x: 0, y: 0 };
  }

  move(key: 'w' | 'a' | 's' | 'd' | any) {
    switch (key) {
      case 'w': this.position.y -= 2; break;
      case 'a': this.position.x -= 8; break;
      case 's': this.position.y += 2; break;
      case 'd': this.position.x += 8; break;
    }
  }
}
