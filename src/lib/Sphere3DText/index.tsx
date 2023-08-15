import { useState, useEffect, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import {
  Center,
  Environment,
  OrbitControls,
  OrbitControlsChangeEvent,
  Text3D,
} from '@react-three/drei';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import InterFont from './Inter_Bold.json';
import { Group, MeshNormalMaterial, MeshToonMaterial } from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { SphereProps } from '../type';

export const FONT_SIZE_MAP = {
  sm: { size: 0.6, height: 0.3, bevel: 0.06 },
  md: { size: 1.2, height: 0.6, bevel: 0.12 },
  lg: { size: 1.8, height: 0.9, bevel: 0.18 },
  xl: { size: 2.4, height: 1.2, bevel: 0.24 },
};

function Sphere3DText({
  textList,
  width,
  height,
  fontColor,
  zoom = false,
  autoRotate = false,
  distance = Math.floor(textList.length ** 0.5) * 3,
  beveled = true,
  defaultRotation = { x: 15, y: 15, z: 0 },
  alwaysFaceCamera = true,
  radius = Math.floor(textList.length ** 0.5) * 5,
  fontSize = 'md',
  background = 'none',
}: SphereProps) {
  extend({ TextGeometry });
  const font = InterFont as any;
  const [pointsRef, setPointsRef] = useState<any>();
  const [positions, setPositions] = useState<any>();
  const textsRefArr = useRef<Group[]>([]);
  const pointsCount = Math.floor(textList.length ** 0.5);
  const lightRef = useRef<any>();

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

  // always face camera
  const handleOrbitChanged = (e: OrbitControlsChangeEvent | undefined) => {
    if (e === undefined) return;

    const cameraPos = e.target.object.position;
    // console.log(lightRef.current.position, cameraPos);
    lightRef.current.position.x = cameraPos.x;
    lightRef.current.position.y = cameraPos.y;
    lightRef.current.position.z = cameraPos.z;
    if (alwaysFaceCamera === false) return;
    const { x, y, z } = e.target.object.rotation;

    textsRefArr.current.forEach(({ rotation }) => {
      rotation.x = x;
      rotation.y = y;
      rotation.z = z;
    });
  };

  return (
    <Canvas
      camera={{ position: [0, 0, distance], fov: 90 }}
      style={{ width: width, height: height }}
    >
      {true ? <fog attach='fog' args={['#fff', 0, radius * 1.5]} /> : null}
      {background !== 'none' ? (
        <Environment background preset={background} blur={0.8} />
      ) : null}
      <OrbitControls
        onChange={handleOrbitChanged}
        autoRotate={autoRotate}
        autoRotateSpeed={3}
        enableZoom={zoom}
      />
      <ambientLight intensity={0.2} />
      <directionalLight ref={lightRef} position={[0, 0, distance]} />

      <points ref={(el: any) => setPointsRef(el)}>
        <sphereGeometry args={[radius / Math.PI, pointsCount, pointsCount]} />
        <meshNormalMaterial />
      </points>
      {positions?.map(([x, z, y]: number[], i: number) => {
        let value: string = textList[i] as string;

        return (
          <Center
            key={i}
            position={[x, y, z]}
            ref={(el) => (textsRefArr.current[i] = el as Group)}
          >
            <ThreeWord
              rotaion={[
                degToRad(defaultRotation.x),
                degToRad(defaultRotation.y),
                degToRad(defaultRotation.z),
              ]}
              font={font}
              fontSize={
                typeof fontSize === 'number'
                  ? fontSize
                  : FONT_SIZE_MAP[fontSize].size
              }
              beveled={beveled}
              fontColor={fontColor}
              value={value}
            />
            {/* <Text3D
              rotation={[
                degToRad(defaultRotation.x),
                degToRad(defaultRotation.y),
                degToRad(defaultRotation.z),
              ]}
              font={font}
              size={
                typeof fontSize === 'number'
                  ? fontSize
                  : FONT_SIZE_MAP[fontSize].size
              }
              height={
                typeof fontSize === 'number'
                  ? fontSize / 2
                  : FONT_SIZE_MAP[fontSize].height
              }
              bevelEnabled={beveled}
              bevelSize={
                typeof fontSize === 'number'
                  ? fontSize / 10
                  : FONT_SIZE_MAP[fontSize].bevel
              }
              bevelThickness={
                typeof fontSize === 'number'
                  ? fontSize / 5
                  : FONT_SIZE_MAP[fontSize].bevel * 2
              }
              letterSpacing={beveled ? 0.05 : 0}
              material={
                fontColor === undefined
                  ? new MeshNormalMaterial()
                  : new MeshToonMaterial({ fog: true, color: fontColor })
              }
            >
              {value}
            </Text3D> */}
          </Center>
        );
      })}
    </Canvas>
  );
}

export default Sphere3DText;

function ThreeWord({
  rotaion,
  font,
  fontSize,
  beveled,
  fontColor,
  hoverColor,
  value,
}: any) {
  return (
    <Text3D
      rotation={rotaion}
      font={font}
      size={fontSize}
      height={fontSize / 2}
      bevelEnabled={beveled}
      bevelSize={fontSize / 10}
      bevelThickness={fontSize / 5}
      letterSpacing={beveled ? 0.05 : 0}
      material={
        fontColor === undefined
          ? new MeshNormalMaterial()
          : new MeshToonMaterial({ fog: true, color: fontColor })
      }
    >
      {value}
    </Text3D>
  );
}
