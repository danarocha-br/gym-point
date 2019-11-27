import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Label, LabelChart } from './styles';

export default function Chart({ data }) {
  return (
    <>
      <AnimatedCircularProgress
        size={100}
        width={5}
        fill={data}
        tintColor={colors.primary}
        backgroundColor={colors.greyLight}
        lineCap="round"
      >
        {fill => <LabelChart>{data}%</LabelChart>}
      </AnimatedCircularProgress>
      <Label>Answered Questions</Label>
    </>
  );
}

Chart.propTypes = {
  /**
   * Defines the data for progress calculation.
   */
  data: PropTypes.number.isRequired,
};
