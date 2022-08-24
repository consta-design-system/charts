import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Histogram, HistogramProps } from '##/components/Histogram';
import { data } from '##/components/Histogram/__mocks__/mock.data';

export function HistogramExampleColor() {
  const vars = useThemeVars();
  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 2,
    color: vars.color.primary['--color-bg-success'],
  };

  return <Histogram {...options} />;
}
