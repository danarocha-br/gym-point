import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import colors from '~/styles/colors';

export const SkeletonGraph = () => {
  return (
    <ContentLoader
      height={300}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor={colors.greyLight}
    >
      <Circle cx="50" cy="50" r="40" />
      <Circle cx="180" cy="50" r="40" />
      <Circle cx="300" cy="50" r="40" />
    </ContentLoader>
  );
};

export const SkeletonContent = () => {
  return (
    <ContentLoader
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor={colors.greyLight}
    >
      <Rect x="0" y="0" rx="4" ry="4" width="320" height="50" />
      <Rect x="0" y="60" rx="4" ry="4" width="320" height="50" />
      <Rect x="0" y="120" rx="4" ry="4" width="320" height="50" />
    </ContentLoader>
  );
};
