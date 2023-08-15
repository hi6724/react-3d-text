import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cloud from './Cloud';
import { NormalSphereProps } from '../type';

export default function SphereText({
  textList,
  width,
  height,
  fontColor,
  hoverColor,
  distance = Math.floor(textList.length ** 0.5) * 3,
  radius = Math.floor(textList.length ** 0.5) * 3,
  fog = true,
  zoom = false,
  autoRotate = false,
  fontSize = 'md',
}: NormalSphereProps) {
  return (
    <Canvas
      style={{ width, height }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, distance], fov: 90 }}
    >
      {fog ? <fog attach='fog' args={['#fff', 0, radius * 1.5]} /> : null}
      <Cloud
        fontColor={fontColor}
        hoverColor={hoverColor}
        textList={textList}
        count={Math.floor(textList.length ** 0.5)}
        fontSize={fontSize}
        radius={radius}
      />
      <OrbitControls autoRotate={autoRotate} enableZoom={zoom} />
    </Canvas>
  );
}
