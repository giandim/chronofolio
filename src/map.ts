import { MAP_SIZE } from "./constants";

type Tile = {
  isBlocking: boolean;
  layers: Layer[];
}

type Layer = {
  materialId: number;
  tileId: number;
}

export type Map = {
  tiles: Tile[][]
}

export function generateMap(): Map {
  return {
    tiles: Array.from({ length: MAP_SIZE }, () =>
      Array.from({ length: MAP_SIZE }, () => (
        { isBlocking: false, layers: [{ materialId: 1, tileId: 1 }] }
      ))
    )
  }
}
