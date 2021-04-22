import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Bar, BarProps } from '../Bar'

const Default = () => {
  const options: BarProps = {
    data,
    padding: 'auto',
    xField: 'value',
    yField: 'mount',
    seriesField: 'name',
    marginRatio: 0,
  }

  return (
    <Bar
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
  title: 'Компоненты|/Bar',
  id: 'components/Bar',
})
