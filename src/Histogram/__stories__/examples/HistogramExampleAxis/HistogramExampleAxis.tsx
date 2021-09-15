import React from 'react'

import { Histogram, HistogramProps } from '@/Histogram'
import { data } from '@/Histogram/__mocks__/mock.data'

export function HistogramExampleAxis() {
  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 2,
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
  const options: HistogramProps = {
    data,
    binField: 'value',
  }

  return <Histogram {...options} />
}
