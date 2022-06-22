import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Histogram, HistogramProps } from '@/__private__/components/Histogram'
import { stackedData } from '@/__private__/components/Histogram/__mocks__/mock.data'
import { getLegend } from '@/__private__/utils/legend'

export function HistogramExampleStacked() {
  const vars = useThemeVars()
  const options: HistogramProps = {
    data: stackedData,
    binField: 'value',
    stackField: 'name',
    binWidth: 4,
    color: [
      vars.color.primary['--color-bg-success'],
      vars.color.primary['--color-bg-normal'],
      vars.color.primary['--color-bg-warning'],
    ],
    meta: {
      range: {
        tickInterval: 10,
      },
      count: {
        max: 50,
        nice: false,
      },
    },
    legend: getLegend({ layout: 'horizontal', position: 'top-left' }),
    renderer: 'svg',
  }

  return <Histogram {...options} />
}
