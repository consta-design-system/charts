import { boolean, object, select } from '@storybook/addon-knobs';
import React from 'react';

import { useSlider } from '##/hooks/useSlider/useSlider';
import { createMetadata } from '##/storybook';
import { getLegend } from '##/utils/legend';

import { colorMapLine, data } from '../__mocks__/mock.data';
import { Area } from '../Area';
import mdx from './Area.docs.mdx';

const sliderCfg = {
  start: 0,
  end: 1,
};

const getKnobs = () => ({
  xField: select('xField', ['date', 'country'], 'date'),
  yField: select('yField', ['value', 'age'], 'value'),
  seriesField: select(
    'seriesField',
    ['country', 'value', 'date', 'age'],
    'country',
  ),
  withSlider: boolean('withSlider', false),
  slider: object('slider', sliderCfg),
  lineColor: object('lineColor', colorMapLine),
});

const newData = data.map((item) => {
  item.age = new Date().getFullYear() - (Number(item.date) || 0);
  return item;
});

export function Playground() {
  const {
    xField,
    yField,
    seriesField,
    lineColor,
    withSlider,
    slider: sliderProp,
  } = getKnobs();

  const slider = useSlider(sliderProp);

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
        colors: lineColor,
      })}
      data={newData}
      xField={xField}
      yField={yField}
      seriesField={seriesField}
      color={Object.keys(lineColor).map((key) => lineColor[key])}
      slider={withSlider && slider}
    />
  );
}

export default createMetadata({
  title: 'Компоненты|/Area',
  id: 'components/Area',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8180%3A23783',
    },
  },
});
