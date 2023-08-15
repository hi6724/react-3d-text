import React from 'react';
import { Sphere3DText, SphereText } from './lib';

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
];

function App() {
  return (
    <div>
      {/* <Awesome3DText text='HELLO WORLD' width='1000px' height='800px' /> */}
      <SphereText
        textList={TEXT_ARR}
        width='400px'
        height='400px'
        zoom={false}
        fontSize={1}
        radius={30}
      />
      <Sphere3DText
        textList={TEXT_ARR}
        height='400px'
        width='400px'
        fontSize={1}
        radius={30}
        defaultRotation={{ x: 30, y: 30, z: 0 }}
        autoRotate
        fontColor='#12dd12'
      />
    </div>
  );
}

export default App;
