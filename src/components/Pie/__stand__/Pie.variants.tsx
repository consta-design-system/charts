import { useBoolean, useNumber } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { data } from '../__mocks__/mock.data';
import { Pie } from '../Pie';

const Variants = () => {
  const radius = useNumber('radius', 1);
  const innerRadius = useNumber('innerRadius', 0.64);
  const withFormatter = useBoolean('withFormatter', true);
  const startAngle = useNumber('startAngle', 0) || 0;
  const endAngle = useNumber('endAngle', 360) || 360;
  const colors = [
    '#22C38E',
    '#F2C94C',
    '#F38B00',
    '#EB5757',
    '#56B9F2',
    '#0071B2',
  ];

  const vars = useThemeVars();

  return (
    <Pie
      style={{
        width: '100%',
        height: '100%',
      }}
      pieStyle={{
        stroke: vars.color.primary['--color-bg-default'],
      }}
      data={data}
      angleField="value"
      colorField="type"
      radius={radius}
      color={colors}
      startAngle={startAngle * (Math.PI / 180)}
      endAngle={endAngle * (Math.PI / 180)}
      statistic={{
        title: {
          formatter: withFormatter ? (v) => v?.type || 'Всего' : undefined,
          style: {
            color: vars.color.primary['--color-typo-primary'],
          },
        },
        content: {
          style: {
            color: vars.color.primary['--color-typo-primary'],
          },
        },
      }}
      innerRadius={innerRadius}
      label={{
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      }}
      interactions={[{ type: 'pie-statistic-active' }]}
    />
  );
};

export default Variants;
