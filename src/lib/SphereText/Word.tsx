import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { FONT_SIZE_MAP } from '../Sphere3DText';

function Word({
  children,
  fontColor = '#2d2d2d',
  hoverColor = '#fa2720',
  fontSize,
  ...props
}: {
  children: any;
  fontColor: string;
  hoverColor: string;
  fontSize: keyof typeof FONT_SIZE_MAP | number;
  [key: string]: any;
}) {
  const color = new THREE.Color();
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize:
      (typeof fontSize === 'number' ? fontSize : FONT_SIZE_MAP[fontSize].size) *
      1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.quaternion.copy(camera.quaternion);
    ref.current.material.color.lerp(
      color.set(hovered ? hoverColor : fontColor),
      0.1
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}
export default Word;
