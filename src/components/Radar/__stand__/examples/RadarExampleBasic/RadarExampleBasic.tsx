import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Radar, RadarProps } from '##/components/Radar';
import { dataWin as data } from '##/components/Radar/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function RadarExampleBasic() {
  const vars = useThemeVars();

  const colors: Record<string, string> = {
    'Винни-Пух': vars.color.primary['--color-bg-success'],
    'Пятачок': vars.color.primary['--color-bg-normal'],
  };

  const options: RadarProps = {
    data,
    color: Object.keys(colors).map((key) => colors[key]),
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    xField: 'skill',
    yField: 'star',
  };

  return <Radar {...options} />;
}
