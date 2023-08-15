import { PresetsType } from '@react-three/drei/helpers/environment-assets';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: any;
    }
  }
}

export type SphereProps = {
  textList: string[];
  radius?: number;
  alwaysFaceCamera?: boolean;
  spotLight?: boolean;
  defaultRotation?: { x: number; y: number; z: number };
  autoRotate?: boolean;
  background?: PresetsType | 'none';
  zoom?: boolean;
  beveled?: boolean;
  fontColor?: string;
} & CommonProps;

export type NormalSphereProps = {
  textList: string[];
  autoRotate?: boolean;
  fog?: boolean;
  fontColor?: string;
  hoverColor?: string;
  zoom?: boolean;
  radius?: number;
} & CommonProps;

export type AnimateTextProps = {
  text: string;
  animation?: 'none' | 'jump' | 'default';
} & CommonProps;

type CommonProps = {
  distance?: number;
  fontSize?: 'sm' | 'md' | 'lg' | 'xl' | number;
  width?: string | number;
  height?: string;
};
