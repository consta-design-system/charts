import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Radar, RadarProps } from '../Radar'

const Default = () => {
  const options: RadarProps = {
    data: data.map(d => ({ ...d, star: Math.sqrt(d.star) })),
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        min: 0,
        nice: true,
      },
    },
    area: {},
  }

  return (
    <Radar
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
  title: 'Компоненты|/Radar',
  id: 'components/Radar',
})
