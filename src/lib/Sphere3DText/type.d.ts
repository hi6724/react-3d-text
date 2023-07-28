declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: any;
    }
  }
}



type TextType =
  | {
      value: string;
      textColor: string;
    }
  | string;

type Props = {
  textList: TextType[];
  width?: string;
  height?: string;
  radius?: number;
  alwaysFaceCamera?: boolean;
  spotLight?: boolean;
  baseColor?: string;
  fontSize?: 'sm' | 'md' | 'lg' | 'xl';
  font?: string | FontData;
  textRotation?: { x: number; y: number; z: number };
  beveled?: boolean;
  distance?: number;
  autoRotate?: boolean;
  background?:
    | 'apartment'
    | 'city'
    | 'dawn'
    | 'forest'
    | 'lobby'
    | 'night'
    | 'park'
    | 'studio'
    | 'sunset'
    | 'warehouse'
    | 'none';
};
