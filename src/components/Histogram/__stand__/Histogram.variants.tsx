import { useNumber, useSelect } from '@consta/stand';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { stackedData } from '../__mocks__/mock.data';
import { Histogram, HistogramProps } from '../Histogram';

const Variants = () => {
  const binWidth = useNumber('binWidth', 4);
  const stackField = useSelect('stackField', ['name', 'value'], 'name');
  const colors = ['#22C38E', '#56B9F2', '#F38B00'];
  const data = stackedData;

  const options: HistogramProps = {
    data,
    binField: 'value',
    stackField,
    binWidth,
    color: colors,
    meta: {
      range: {
        tickInterval: 10,
      },
      count: {
        max: 50,
        nice: false,
      },
    },
  };

  return (
    <Histogram
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      style={{
        width: '100%',
        height: '100%',
      }}
      {...options}
    />
  );
};

export default Variants;
