import React, { FC } from 'react';

interface ImageProps {
  src: string;
}

const Image: FC<ImageProps> = ({ src }) => <img src={src}></img>;

export default Image;
