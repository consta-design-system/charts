import { useThemeVars } from '@consta/uikit/useThemeVars';
import React from 'react';

import { Histogram, HistogramProps } from '##/components/Histogram';
import { data } from '##/components/Histogram/__mocks__/mock.data';

export function HistogramExampleBoxesWidth() {
  const vars = useThemeVars();

  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 5,
    color: vars.color.primary['--color-bg-normal'],
  };

  return <Histogram {...options} />;
}

export function HistogramExampleBoxesNumber() {
  const vars = useThemeVars();

  const options: HistogramProps = {
    data,
    binField: 'value',
    binNumber: 8,
    color: vars.color.primary['--color-bg-normal'],
  };

  return <Histogram {...options} />;
}
