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

| Name         | Type           | Description                                            |
| ------------ | -------------- | ------------------------------------------------------ | --------------------- |
| `textList`   | `string[]`     | **Required.** List of strings to be drawn on a sphere. |
| `width`      | `string        | number`                                                | The width of canvas.  |
| `height`     | `string        | number`                                                | The height of canvas. |
| `radius`     | `number`       | Sphere radius.                                         |
| `distance`   | `number`       | The distance from the camera to the sphere.            |
| `fontSize`   | `number = 1.2` | The size of text.                                      |
| `fontColor`  | `string`       | Default color of the text.                             |
| `hoverColor` | `string`       | Color of the text when mouse over the text.            |

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

| Name               | Type                          | Description                                            |
| ------------------ | ----------------------------- | ------------------------------------------------------ | --------------------- |
| `textList`         | `string[]`                    | **Required.** List of strings to be drawn on a sphere. |
| `width`            | `string                       | number`                                                | The width of canvas.  |
| `height`           | `string                       | number`                                                | The height of canvas. |
| `radius`           | `number`                      | Sphere radius.                                         |
| `distance`         | `number`                      | The distance from the camera to the sphere.            |
| `fontSize`         | `number = 1.2`                | The size of text.                                      |
| `autoRotate`       | `boolean = false`             | Sphere auto rotate                                     |
| `defaultRotation`  | `number = { x:15, y:15, z:0}` | Text rotation                                          |
| `alwaysFaceCamera` | `boolean = true`              | Text always face to camera                             |

## Usage

```javascript
import { Sphere3DText } from 'react-3d-text';

function Items() {
  return <Sphere3DText textList={TEXT_ARR} width='1000px' height='500px' />;
}
```
