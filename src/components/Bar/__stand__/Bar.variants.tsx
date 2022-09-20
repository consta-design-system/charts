import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { Bar } from '../Bar';

const Variants = () => {
  const seriesField = useSelect(
    'seriesField',
    ['value', 'name', 'month'],
    'name',
  );
  const withLabel = useBoolean('withLabel', false);
  const isStack = useBoolean('isStack', true);
  const isGroup = useBoolean('isGroup', false);
  const isPercent = useBoolean('isPercent', false);
  const colors = ['#56B9F2', '#F38B00', '#22C38E'];

  return (
    <Bar
      data={data}
      padding="auto"
      xField="value"
      yField="month"
      seriesField={seriesField}
      marginRatio={0}
      isGroup={isGroup}
      isPercent={isPercent}
      isStack={isStack}
      color={colors}
      legend={getLegend({
        layout: 'horizontal',
        offsetY: -10,
        offsetX: 0,
        position: 'top-left',
      })}
      label={
        withLabel && {
          position: 'middle',
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
            { type: 'adjust-color' },
          ],
        }
      }
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
    />
  );
};

export default Variants;
