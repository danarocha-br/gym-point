import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';

export default function OrdersChart({ data }) {
  return (
    <RadialChart
      data={data}
      innerRadius={58}
      radius={65}
      width={180}
      height={300}
      padAngle={0.05}
      colorType="literal"
      animation
      showLabels
      labelsAboveChildren
    />
  );
}

OrdersChart.propTypes = {
  /**
   * Populates the chart.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
