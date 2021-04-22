import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Waterfall, WaterfallProps } from '../Waterfall'

const Default = () => {
  const options: WaterfallProps = {
    data,
    xField: 'type',
    yField: 'money',
  }

  return (
    <Waterfall
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
  title: 'Компоненты|/Waterfall',
  id: 'components/Waterfall',
})
