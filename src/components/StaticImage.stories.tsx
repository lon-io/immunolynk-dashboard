import React from 'react';
import StaticImage from './StaticImage';

export default {
  title: 'AppStaticImage',
  component: StaticImage,
};

export const RandomStaticImage = () => <StaticImage imageNameWithExt="char-01.png" />;
