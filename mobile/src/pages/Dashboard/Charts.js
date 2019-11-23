import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

import { Charts, ChartGroup, Label, LabelChart } from './styles';
import colors from '~/styles/colors';

export default function ChartsContainer({
  onCheckin,
  checkins,
  current,
  month,
  total,
  monthCalc,
}) {
  return (
    <Charts>
      <ChartGroup>
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={month}
          tintColor={colors.primary}
          backgroundColor={colors.greyLight}
          lineCap="round"
        >
          {fill => <LabelChart>{monthCalc}</LabelChart>}
        </AnimatedCircularProgress>
        <Label>This Month</Label>
      </ChartGroup>

      <ChartGroup>
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={current}
          tintColor={colors.green}
          backgroundColor={colors.greyLight}
          lineCap="round"
        >
          {fill => (
            <TouchableOpacity onPress={onCheckin}>
              <Icon
                name="plus-circle"
                size={43}
                style={{ marginTop: 5, marginLeft: 1 }}
                color={colors.green}
              />
            </TouchableOpacity>
          )}
        </AnimatedCircularProgress>
        <Label>Checkin</Label>
      </ChartGroup>

      <ChartGroup>
        <AnimatedCircularProgress
          size={80}
          width={5}
          fill={total}
          tintColor={colors.blue}
          backgroundColor={colors.greyLight}
          lineCap="round"
        >
          {fill => <LabelChart>{checkins.length}</LabelChart>}
        </AnimatedCircularProgress>
        <Label>Total Checkins</Label>
      </ChartGroup>
    </Charts>
  );
}
