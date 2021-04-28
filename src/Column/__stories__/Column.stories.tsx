import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Column, ColumnProps } from '../Column'

const Default = () => {
  const options: ColumnProps = {
    data,
    padding: 'auto',
    xField: 'mount',
    yField: 'value',
    seriesField: 'name',
  }

  return (
    <Column
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
  title: 'Компоненты|/Column',
  id: 'components/Column',
})
