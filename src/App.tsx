import React from 'react';
import { Sphere3DText } from './lib';

const TEXT_ARR = [
  // { value: 'PINK', textColor: 'PINK' },
  'CSS',
  'RN',
  'Firebase',
  'Storybook',
  'Next.js',
  'JS/TS',
  'gsap',
  'React',
  'Graphql',
  'Redux',
  'Tailwind',
  'Recoil',
  'Python',
  'Java',
  'npm',
  'git',
  'Node JS',
  'ES5/ES6',
  'RTK',
  'CSS',
  'RN',
  'Firebase',
  'Storybook',
  'Next.js',
  'JS/TS',
  'gsap',
  'React',
  'Graphql',
  'Redux',
  'Tailwind',
  'Recoil',
  'Python',
  'Java',
  'npm',
  'git',
  'Node JS',
  'ES5/ES6',
  'RTK',
];

function App() {
  return (
    <div>
      <Sphere3DText
        textList={TEXT_ARR}
        height='600px'
        width='600px'
        distance={15}
        textRotation={{ x: 30, y: 15, z: 0 }}
        fontSize='md'
        alwaysFaceCamera
        beveled
        autoRotate
        // background='night'
      />
    </div>
  );
}

export default App;
