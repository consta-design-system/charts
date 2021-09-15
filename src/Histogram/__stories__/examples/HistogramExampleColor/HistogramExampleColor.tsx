import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Histogram, HistogramProps } from '@/Histogram'
import { data } from '@/Histogram/__mocks__/mock.data'

export function HistogramExampleColor() {
  const vars = useThemeVars()
  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 2,
    color: vars.color.primary['--color-bg-success'],
  }

  return <Histogram {...options} />
}
