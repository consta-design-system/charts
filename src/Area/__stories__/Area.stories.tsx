import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Area } from '../Area'

import mdx from './Area.docs.mdx'

export function Playground() {
  return (
    <Area
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
      data={data}
      xField="year"
      yField="value"
      seriesField="country"
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Area',
  id: 'components/Area',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3680%3A10824',
    },
  },
})
