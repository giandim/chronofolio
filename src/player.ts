import { Position } from './types'
import { TILE_SIZE } from './constants';

export class Player {
  position: Position;

  constructor() {
    this.position = { x: TILE_SIZE, y: TILE_SIZE };
  }

  move(key: 'w' | 'a' | 's' | 'd' | any) {
    switch (key) {
      case 'w': this.position.y -= 2; break;
      case 'a': this.position.x -= 2; break;
      case 's': this.position.y += 2; break;
      case 'd': this.position.x += 2; break;
    }
  }
}
