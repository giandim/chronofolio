import { MAP_SIZE } from "./constants";

type Tileset = {
  tilesetSize: number;
  tilesetColumns: number;
  tilesetRows: number;
  tileSize: number;
  file: HTMLImageElement;
};

class ImageFactory {
  static create(src: string): HTMLImageElement {
    const img = new Image();
    img.src = src;
    return img;
  }
}

export const Materials: Record<number, Tileset> = {
  1: {
    tilesetSize: 640,
    tilesetColumns: 10,
    tilesetRows: 4,
    tileSize: 64,
    file: ImageFactory.create("./tilemap-flat.png")
  }
}

export class Map {
  layers = generateMap();

  constructor() { }

  getTilesetImage(materialId: number): HTMLImageElement {
    return Materials[materialId]?.file
  }
}

export function generateMap(): number[][] {
  return (
    Array.from({ length: MAP_SIZE }, () =>
      Array.from({ length: MAP_SIZE }, () => (
        12
      ))
    )
  )
}


