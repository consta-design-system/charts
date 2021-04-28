import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Scatter, ScatterProps } from '../Scatter'

const Default = () => {
  const options: ScatterProps = {
    data,
    xField: 'x',
    yField: 'y',
    size: 5,
    pointStyle: {
      fill: '#5B8FF9',
    },
  }

  return (
    <Scatter
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      {...options}
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Scatter',
  id: 'components/Scatter',
})
