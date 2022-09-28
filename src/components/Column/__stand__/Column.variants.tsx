import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { Column } from '../Column';

const Variants = () => {
  const xField = useSelect('xField', ['name', 'month'], 'month');
  const yField = useSelect('yField', ['value', 'group'], 'value');
  const seriesField = useSelect(
    'seriesField',
    ['name', 'month', 'value', 'group'],
    'name',
  );
  const isGroup = useBoolean('isGroup', false);
  const isStack = useBoolean('isStack', true);
  const isRange = useBoolean('isRange', false);
  const isPercent = useBoolean('isPercent', false);

  const colors = ['#F38B00', '#22C38E'];

  return (
    <Column
      style={{
        width: '100%',
        height: '100%',
      }}
      legend={getLegend({
        layout: 'horizontal',
        offsetY: -10,
        offsetX: 0,
        position: 'top-left',
      })}
      color={colors}
      isPercent={isPercent}
      isStack={isStack}
      isRange={isRange}
      isGroup={isGroup}
      data={data}
      renderer="svg"
      padding="auto"
      xField={xField || 'month'}
      yField={yField || 'value'}
      seriesField={seriesField}
    />
  );
};

export default Variants;
