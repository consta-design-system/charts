import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Histogram, HistogramProps } from '@/Histogram'
import { data } from '@/Histogram/__mocks__/mock.data'

export function HistogramExampleAxis() {
  const vars = useThemeVars()

  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 2,
    color: vars.color.primary['--color-bg-normal'],
    meta: {
      range: {
        tickInterval: 10,
      },
      count: {
        max: 40,
        nice: false,
      },
    },
    xAxis: {
      tickInterval: 5,
    },
  }

  return <Histogram {...options} />
}

export function HistogramExampleSuperBasic() {
  const vars = useThemeVars()

  const options: HistogramProps = {
    data,
    color: vars.color.primary['--color-bg-normal'],
    binField: 'value',
  }

  return <Histogram {...options} />
}
