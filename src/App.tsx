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
        width={1000}
        height='500px'
        zoom={false}
        fontColor='#00ff00'
        hoverColor='#ff00ff'
        // fontSize={1}
        // radius={10}
      />

      <Sphere3DText
        textList={TEXT_ARR}
        width='1000px'
        height='500px'
        // defaultRotation={{ x: 30, y: 30, z: 0 }}
        // fontSize={}?
        // radius={30}
        // autoRotate
        // fontColor='#12dd12'
      />
    </div>
  );
}


export default App;