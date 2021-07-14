import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { DualAxes } from '../DualAxes'

import mdx from './DualAxes.docs.mdx'

export function Playground() {
  return (
    <DualAxes
      style={{
        width: 800,
        height: '100%',
      }}
      data={[data, data]}
      xField="year"
      yField={['value', 'count']}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/DualAxes',
  id: 'components/DualAxes',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
