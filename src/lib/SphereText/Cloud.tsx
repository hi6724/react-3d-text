import * as THREE from 'three';
import { useMemo } from 'react';
import Word from './Word';

function Cloud({
  count,
  radius,
  textList,
  fontColor,
  hoverColor,
  fontSize,
}: any) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        let value = textList[i * count + j] as string;

        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius / 3, phiSpan * (i + 1), thetaSpan * j)
          ),
          value,
        ]);
      }
    }
    return temp;
  }, [count, radius / 3, textList]);
  return (
    <>
      {words.map(([pos, word], index) => (
        <Word
          fontColor={fontColor}
          hoverColor={hoverColor}
          key={index}
          position={pos}
          children={word}
          fontSize={fontSize}
        />
      ))}
    </>
  );
}
export default Cloud;
