import { useBoolean, useNumber, useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { useSlider } from '##/hooks/useSlider/useSlider';
import { getLegend } from '##/utils/legend';

import { colorMapLine, data } from '../__mocks__/mock.data';
import { Line } from '../Line';

const sliderCfg = {
  start: 0.1,
  end: 0.6,
};

const newData = data.map((item) => {
  item.age = new Date().getFullYear() - (Number(item.date) || 0);
  return item;
});

const Variants = () => {
  const xField = useSelect('xField', ['date', 'country'], 'date');
  const yField = useSelect('yField', ['value', 'age'], 'value');
  const smooth = useBoolean('smooth', false);
  const withSlider = useBoolean('withSlider', true);
  const dashWidth = useNumber('dashWidth', 0);
  const connectNulls = useBoolean('connectNulls', false);
  const isStack = useBoolean('isStack', false);
  // const lineColor: object('lineColor', colorMapLine);

  const slider = useSlider(sliderCfg);

  const vars = useThemeVars();

  return (
    <Line
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      smooth={smooth}
      connectNulls={connectNulls}
      legend={getLegend({
        layout: 'horizontal',
        offsetY: -4,
        offsetX: 0,
        position: 'top-left',
        colors: colorMapLine,
      })}
      isStack={isStack}
      data={newData}
      xField={xField}
      yField={yField}
      slider={withSlider && slider}
      seriesField="country"
      color={({ country }) => {
        return colorMapLine[country];
      }}
      lineStyle={{
        lineDash: [dashWidth],
      }}
      annotations={[
        {
          type: 'line',
          start: ['min', 'median'],
          end: ['max', 'median'],
          style: {
            stroke: vars.color.primary['--color-bg-alert'],
            lineDash: [2, 2],
          },
        },
      ]}
    />
  );
};

export default Variants;
