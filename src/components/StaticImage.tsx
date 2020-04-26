import React, { FC } from 'react';

interface StaticImageProps {
  imageNameWithExt: string;
}

const StaticImage: FC<StaticImageProps> = ({ imageNameWithExt }) => <img src={require(`../assets/images/${imageNameWithExt}`)}></img>;

export default StaticImage;
