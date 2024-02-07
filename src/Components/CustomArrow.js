import React from 'react';
import { ReactComponent as RArrow } from '../image/RightArrow.svg';
import { ReactComponent as LArrow } from '../image/LeftArrow.svg';

export const CustomNextArrow = () => (
  <div>
    <RArrow fontSize="large" />
  </div>
);

export const CustomPrevArrow = () => (
  <div>
    <LArrow fontSize="large" />
  </div>
);