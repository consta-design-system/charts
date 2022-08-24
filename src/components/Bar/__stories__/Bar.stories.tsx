import { array, boolean, object, select } from '@storybook/addon-knobs';
import React from 'react';

import { createMetadata } from '##/storybook';
import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { Bar } from '../Bar';
import mdx from './Bar.docs.mdx';

const getKnobs = () => ({
  seriesField: select('seriesField', ['value', 'name', 'month'], 'name'),
  withLabel: boolean('withLabel', false),
  isStack: boolean('isStack', true),
  isGroup: boolean('isGroup', false),
  isPercent: boolean('isPercent', false),
  colors: array('colors', ['#56B9F2', '#F38B00', '#22C38E']),
  data: object('data', data),
});

const Default = () => {
  const { withLabel, seriesField, data, isStack, isGroup, isPercent, colors } =
    getKnobs();

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

export function Playground() {
  return <Default />;
}

export default createMetadata({
  title: 'Компоненты|/Bar',
  id: 'components/Bar',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8243%3A31333',
    },
  },
});
