import { useState, useEffect, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import {
  Center,
  Environment,
  FontData,
  OrbitControls,
  OrbitControlsChangeEvent,
  PerspectiveCamera,
  Text3D,
} from '@react-three/drei';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import InterFont from '../Inter_Bold.json';
import { Group } from 'three';
import { degToRad } from 'three/src/math/MathUtils';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: any;
    }
  }
}

const SIZE_MAP = {
  sm: { size: 0.2, height: 0.1, bevel: 0.02 },
  md: { size: 0.4, height: 0.2, bevel: 0.04 },
  lg: { size: 0.6, height: 0.3, bevel: 0.06 },
  xl: { size: 0.8, height: 0.4, bevel: 0.08 },
};

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
  autoRotaion?: boolean;
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
    | 'warehouse';
};

function NormalSphere({
  textList,
  width,
  height,
  baseColor,
  autoRotaion = false,
  distance = Math.ceil(textList.length ** 0.5) * 3,
  beveled = false,
  textRotation = { x: 0, y: 0, z: 0 },
  alwaysFaceCamera = false,
  radius = Math.ceil(textList.length ** 0.5),
  font = InterFont as any,
  fontSize = 'md',
  background = 'dawn',
}: Props) {
  extend({ TextGeometry });
  const [pointsRef, setPointsRef] = useState<any>();
  const [positions, setPositions] = useState<any>();
  const textsRefArr = useRef<Group[]>([]);
  const pointsCount = Math.ceil(textList.length ** 0.5);

  useEffect(() => {
    if (!pointsRef) return;
    let tempP = Array.from(pointsRef.geometry.attributes.position.array);
    let newP = [];
    const cnt = pointsCount;
    for (let i = 0; i < tempP.length - 3 * cnt; i += 3) {
      const temp = [tempP[i], tempP[i + 1], tempP[i + 2]];
      if (!temp.includes(0)) {
        newP.push(temp);
      }
    }
    setPositions(newP);
  }, [pointsRef, pointsCount]);

  // 자동회전
  const handleOrbitChanged = (e: OrbitControlsChangeEvent | undefined) => {
    if (e === undefined) return;
    if (alwaysFaceCamera === false) return;
    const { x, y, z } = e.target.object.rotation;

    textsRefArr.current.forEach((plane) => {
      plane.rotation.x = x + degToRad(textRotation.x);
      plane.rotation.y = y + degToRad(textRotation.y);
      plane.rotation.z = z + degToRad(textRotation.z);
    });
  };

  return (
    <Canvas
      camera={{ position: [0, 0, distance] }}
      style={{ width: width, height: height }}
    >
      <Environment background preset={background} blur={0.8} />
      <OrbitControls onChange={handleOrbitChanged} />
      <spotLight position={[0, 0, pointsCount * 5]} intensity={1} />
      <spotLight position={[0, 0, -pointsCount * 5]} intensity={1} />
      <spotLight position={[0, pointsCount * 5, 0]} intensity={1} />
      <spotLight position={[0, -pointsCount * 5, 0]} intensity={1} />

      <points ref={(el: any) => setPointsRef(el)}>
        <sphereGeometry args={[radius, pointsCount, pointsCount]} />
        <meshNormalMaterial />
      </points>

      {positions?.map(([x, z, y]: number[], i: number) => {
        let value: string = textList[i] as string;
        let material =
          baseColor === undefined ? (
            <meshNormalMaterial />
          ) : (
            <meshStandardMaterial color={baseColor} />
          );

        if (typeof value === 'object') {
          const tmp = textList[i] as any;
          value = tmp.value;
          material = <meshStandardMaterial color={tmp.textColor} />;
        }
        return (
          <Center
            key={i}
            position={[x, y, z]}
            ref={(el) => (textsRefArr.current[i] = el as Group)}
          >
            <Text3D
              rotation={[
                degToRad(textRotation.x),
                degToRad(textRotation.y),
                degToRad(textRotation.z),
              ]}
              font={font}
              size={SIZE_MAP[fontSize].size}
              height={SIZE_MAP[fontSize].height}
              bevelEnabled={beveled}
              bevelSize={SIZE_MAP[fontSize].bevel}
              bevelThickness={SIZE_MAP[fontSize].bevel * 2}
              letterSpacing={beveled ? 0.05 : 0}
            >
              {value}
              {material}
            </Text3D>
          </Center>
        );
      })}
    </Canvas>
  );
}

export default NormalSphere;
