# react-3d-text

**A ReactJS component to render a 3D Sphere Text.**

By installing this component and writing only a data you can obtain this

<img src="" alt="react-sphere-text" />

or

<img src="" alt="react-sphere-3d-text" />

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

### Props

| Name         | Type       | Description                                 |
| ------------ | ---------- | ------------------------------------------- | ------------------------------------------- |
| `textList`   | `string[]` | **Required.** The total number of pages.    |
| `width`      | `string    | number`                                     | The range of pages displayed.               |
| `height`     | `string    | number`                                     | The number of pages to display for margins. |
| `radius`     | `number`   | The number of pages to display for margins. |
| `distance`   | `number`   | The number of pages to display for margins. |
| `fontSize`   | `number`   | The number of pages to display for margins. |
| `fontColor`  | `string`   | The number of pages to display for margins. |
| `hoverColor` | `string`   | The number of pages to display for margins. |

## Usage

```javascript
import React, { useEffect, useState } from 'react';
import { Sphere3DText, SphereText } from 'react-3d-text';

function Items() {
  return <SphereText textList={TEXT_ARR} width='1000px' height='500px' />;
}
```

# Sphere3DText

---

### Props

| Name         | Type       | Description                                 |
| ------------ | ---------- | ------------------------------------------- | ------------------------------------------- |
| `textList`   | `string[]` | **Required.** The total number of pages.    |
| `width`      | `string    | number`                                     | The range of pages displayed.               |
| `height`     | `string    | number`                                     | The number of pages to display for margins. |
| `radius`     | `number`   | The number of pages to display for margins. |
| `distance`   | `number`   | The number of pages to display for margins. |
| `fontSize`   | `number`   | The number of pages to display for margins. |
| `fontColor`  | `string`   | The number of pages to display for margins. |
| `hoverColor` | `string`   | The number of pages to display for margins. |

## Usage

```javascript
import React, { useEffect, useState } from 'react';
import { Sphere3DText, SphereText } from 'react-3d-text';

function Items() {
  return <Sphere3DText textList={TEXT_ARR} width='1000px' height='500px' />;
}
```
