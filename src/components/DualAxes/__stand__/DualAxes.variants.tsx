import { useBoolean, useNumber } from '@consta/stand';
import React from 'react';

import { useSlider } from '##/hooks/useSlider/useSlider';
import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { DualAxes, DualAxesProps } from '../DualAxes';

const sliderCfg = {
  start: 0,
  end: 1,
  height: 20,
  trendCfg: {
    smooth: true,
    isArea: true,
  },
};
const Variants = () => {
  const smooth = useBoolean('smooth', false);
  // const geometry = useSelect('geometry', ['line', 'column'], 'line');
  const pointSize = useNumber('pointSize', 0);
  const isGroup = useBoolean('isGroup', false);
  const isStack = useBoolean('isStack', false);
  const isRange = useBoolean('isRange', false);
  const isPercent = useBoolean('isPercent', false);
  const withSlider = useBoolean('withSlider', false);

  const colors = ['#F38B00', '#22C38E'];

  const slider = useSlider(sliderCfg);

  const options: DualAxesProps = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    renderer: 'svg',
    geometryOptions: [
      {
        // geometry,
        color: colors[0],
        smooth,
        seriesField: 'value',
        connectNulls: true,
        isGroup,
        isPercent,
        isRange,
        isStack,
        legend: getLegend({ layout: 'horizontal', position: 'top-right' }),
        point: {
          size: pointSize,
        },
      },
      {
        // geometry,
        color: colors[1],
        smooth,
        connectNulls: true,
        seriesField: 'count',
        isGroup,
        isPercent,
        isRange,
        legend: getLegend({ layout: 'horizontal', position: 'top-right' }),
        isStack,
        point: {
          size: pointSize,
        },
      },
    ],
    slider: withSlider && slider,
  };

  return (
    <DualAxes
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  );
};

export default Variants;
