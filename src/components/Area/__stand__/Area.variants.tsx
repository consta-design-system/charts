import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';

import { useSlider } from '##/hooks/useSlider/useSlider';
import { getLegend } from '##/utils/legend';

import { colorMapLine, data } from '../__mocks__/mock.data';
import { Area } from '../Area';

const sliderCfg = {
  start: 0,
  end: 1,
};

const newData = data.map((item) => {
  item.age = new Date().getFullYear() - (Number(item.date) || 0);
  return item;
});

export const Variants = () => {
  const xField = useSelect('xField', ['date', 'country'], 'date');
  const yField = useSelect('yField', ['value', 'age'], 'value');
  const seriesField = useSelect(
    'seriesField',
    ['country', 'value', 'date', 'age'],
    'country',
  );
  const withSlider = useBoolean('withSlider', false);

  const slider = useSlider(sliderCfg);

  return (
    <Area
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      legend={getLegend({
        layout: 'horizontal',
        offsetY: -10,
        offsetX: 0,
        position: 'top-left',
        colors: colorMapLine,
      })}
      data={newData}
      xField={xField}
      yField={yField}
      seriesField={seriesField}
      color={Object.keys(colorMapLine).map((key) => colorMapLine[key])}
      slider={withSlider && slider}
    />
  );
};

export default Variants;
