import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Column } from '##/components/Column';
import { data } from '##/components/Column/__mocks__/mock.data';
import { getLegend } from '##/utils/legend';

export function ColumnExampleGroup() {
  const vars = useThemeVars();

  return (
    <Column
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      color={[
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-success'],
      ]}
      xField="month"
      yField="value"
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      seriesField="name"
      isGroup
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  );
}
