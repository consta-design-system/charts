import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Bar, BarProps } from '../Bar'

import mdx from './Bar.docs.mdx'

const Default = () => {
  const options: BarProps = {
    data,
    padding: 'auto',
    xField: 'value',
    yField: 'month',
    seriesField: 'name',
    marginRatio: 0,
  }

  return (
    <Bar
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
  title: 'Компоненты|/Bar',
  id: 'components/Bar',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
