import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Histogram, HistogramProps } from '../Histogram'

const Default = () => {
  const options: HistogramProps = {
    data,
    binField: 'value',
    binWidth: 2,
  }

  return (
    <Histogram
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Histogram',
  id: 'components/Histogram',
})
