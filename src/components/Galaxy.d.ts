import type { HTMLAttributes, ReactElement } from "react";

export type GalaxyDirection = "forward" | "backward";

export interface GalaxyProps extends HTMLAttributes<HTMLDivElement> {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  repulsionStrength?: number;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
  lightMode?: boolean;
  starColors?: string[];
  starSize?: number;
  flareIntensity?: number;
  layers?: number;
  direction?: GalaxyDirection;
  clickWarp?: boolean;
  intro?: boolean;
  backgroundColor?: string;
  opacity?: number;
  dpr?: number;
}

declare const Galaxy: (props: GalaxyProps) => ReactElement;

export default Galaxy;
