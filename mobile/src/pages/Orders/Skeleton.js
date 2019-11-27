import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';

import colors from '~/styles/colors';

export default function Skeleton() {
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
}
