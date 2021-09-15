import React from 'react'

import { Histogram, HistogramProps } from '@/Histogram'
import { data } from '@/Histogram/__mocks__/mock.data'

export function HistogramExampleBoxesWidth() {
  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 5,
  }

  return <Histogram {...options} />
}

export function HistogramExampleBoxesNumber() {
  const options: HistogramProps = {
    data,
    binField: 'value',
    binNumber: 8,
  }

  return <Histogram {...options} />
}
