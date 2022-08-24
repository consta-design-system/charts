import { useThemeVars } from '@consta/uikit/useThemeVars';
import { boolean, number, object, select } from '@storybook/addon-knobs';
import React from 'react';

import { useSlider } from '##/hooks/useSlider/useSlider';
import { createMetadata } from '##/storybook';
import { getLegend } from '##/utils/legend';

import { colorMapLine, data } from '../__mocks__/mock.data';
import { Line } from '../Line';
import mdx from './Line.docs.mdx';

const sliderCfg = {
  start: 0.1,
  end: 0.6,
};

const getKnobs = () => ({
  xField: select('xField', ['date', 'country'], 'date'),
  yField: select('yField', ['value', 'age'], 'value'),
  smooth: boolean('smooth', false),
  withSlider: boolean('withSlider', true),
  slider: object('slider', sliderCfg),
  dashWidth: number('dashWidth', 0),
  connectNulls: boolean('connectNulls', false),
  isStack: boolean('isStack', false),
  lineColor: object('lineColor', colorMapLine),
});

const newData = data.map((item) => {
  item.age = new Date().getFullYear() - (Number(item.date) || 0);
  return item;
});

const Default = () => {
  const {
    xField,
    yField,
    lineColor,
    smooth,
    connectNulls,
    isStack,
    dashWidth,
    withSlider,
    slider: sliderProp,
  } = getKnobs();

  const slider = useSlider(sliderProp);

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
        colors: lineColor,
      })}
      isStack={isStack}
      data={newData}
      xField={xField}
      yField={yField}
      slider={withSlider && slider}
      seriesField="country"
      color={({ country }) => {
        return lineColor[country];
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

export function Playground() {
  return <Default />;
}

export default createMetadata({
  title: 'Компоненты|/Line',
  id: 'components/Line',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8125%3A17093',
    },
  },
});
