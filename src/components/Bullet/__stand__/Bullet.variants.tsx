import { useSelect } from '@consta/stand';
import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { getLegend } from '##/utils/legend';

import { data } from '../__mocks__/mock.data';
import { Bullet, BulletProps } from '../Bullet';

type ColorSignature =
  | '--color-bg-brand'
  | '--color-bg-secondary'
  | '--color-bg-normal';

const Variants = () => {
  const layout = useSelect('layout', ['horizontal', 'vertical'], 'horizontal');
  const rangeColor = useSelect(
    'rangeColor',
    ['brand', 'secondary', 'normal'],
    'secondary',
  );
  const measuresColor = ['#22C38E', '#F2C94C', '#F38B00', '#EB5757'];

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
        width: '100%',
        height: '100%',
      }}
      {...options}
    />
  );
};

export default Variants;
