# react-3d-text

**A ReactJS component to render a 3D Sphere Text.**

By installing this component and writing only a data you can obtain 3D Sphere Text

## Installation

Install `react-3d-text` with [npm](https://www.npmjs.com/):

```
npm install react-3d-text
```

## Basic Usage

```javascript
import { SphereText, Sphere3DText ... } from '@react-3d-text'

// Example items
const TEXT_ARR = [
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


```

# SphereText

---

<img src="https://github.com/hi6724/react-3d-text/blob/master/public/react-sphere.png?raw=true" alt="react-sphere-text" />

### Props

```typescript
type Props = {
  /** List of strings to be drawn on a sphere */
  textList: string[];
  /** The width and height of canvas */
  width?: string;
  height?: string;
  /** Sphere radius */
  radius?: number;
  /** The distance from the camera to the sphere .*/
  distance?: number;
  /** The size of text */
  fontSize?: number;
  /** Default color of the text */
  fontColor?: string;
  /** Color of the text when mouse over the text.  */
  hoverColor?: string;
};
```

## Usage

```javascript
import { SphereText } from 'react-3d-text';

function Items() {
  return <SphereText textList={TEXT_ARR} width='1000px' height='500px' />;
}
```

# Sphere3DText

---

<img src="https://github.com/hi6724/react-3d-text/blob/master/public/react-3d-sphere.png?raw=true" alt="react-sphere-3d-text" />

### Props

```typescript
type Props = {
  /** List of strings to be drawn on a sphere */
  textList: string[];
  /** The width and height of canvas */
  width?: string;
  height?: string;
  /** Sphere radius */
  radius?: number;
  /** The distance from the camera to the sphere .*/
  distance?: number;
  /** The size of text */
  fontSize?: number;
  /** Default color of the text */
  fontColor?: string = 1.2;
  /** Sphere auto rotate */
  autoRotate?: boolean = false;
  /** Text rotation */
  defaultRotation?: { x: number; y: number; z: number } = {
    x: 15,
    y: 15,
    z: 0,
  };
  /** Text always face to camera */
  alwaysFaceCamera?: boolean = true;
};
```

## Usage

```javascript
import { Sphere3DText } from 'react-3d-text';

function Items() {
  return <Sphere3DText textList={TEXT_ARR} width='1000px' height='500px' />;
}
```
