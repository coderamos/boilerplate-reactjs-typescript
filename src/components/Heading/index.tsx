import React from 'react';

import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
};

const Heading = ({ children, color = 'white' }: HeadingProps) => (
  <s.Wrapper color={color}>{children}</s.Wrapper>
);

export default Heading;
