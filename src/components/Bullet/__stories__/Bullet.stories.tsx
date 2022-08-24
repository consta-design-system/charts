import { useThemeVars } from '@consta/uikit/useThemeVars';
import { array, object, select } from '@storybook/addon-knobs';
import React from 'react';

import { createMetadata } from '##/storybook';
import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { Bullet, BulletProps } from '../Bullet';
import mdx from './Bullet.docs.mdx';

const getKnobs = () => ({
  layout: select('layout', ['vertical', 'horizontal'], 'horizontal'),
  rangeColor: select(
    'rangeColor',
    ['brand', 'secondary', 'normal'],
    'secondary',
  ),
  measuresColor: array('measuresColor', [
    '#22C38E',
    '#F2C94C',
    '#F38B00',
    '#EB5757',
  ]),
  data: object('data', data),
});

type ColorSignature =
  | '--color-bg-brand'
  | '--color-bg-secondary'
  | '--color-bg-normal';

const Default = () => {
  const { data, layout, rangeColor, measuresColor } = getKnobs();

  const vars = useThemeVars();

  const options: BulletProps = {
    data,
    layout,
    measureField: 'measures',
    rangeField: 'ranges',
    legend: getLegend({}),
    targetField: 'target',
    xField: 'title',
    yAxis: false,
    color: {
      target: vars.color.primary['--color-bg-tone'],
      range: vars.color.primary[`--color-bg-${rangeColor}` as ColorSignature],
      measure: measuresColor,
    },
    bulletStyle: {
      range: {
        fillOpacity: 1,
      },
      measure: {
        fillOpacity: 1,
      },
    },
  };

  return (
    <Bullet
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  );
};

export function Playground() {
  return <Default />;
}

export default createMetadata({
  title: 'Компоненты|/Bullet',
  id: 'components/Bullet',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=8322%3A34962',
    },
  },
});
