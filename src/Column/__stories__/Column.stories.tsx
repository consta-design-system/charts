import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Column } from '../Column'

import mdx from './Column.docs.mdx'

const Default = () => {
  return (
    <Column
      style={{
        width: 800,
        height: '100%',
      }}
      data={data}
      renderer="svg"
      padding="auto"
      xField="month"
      yField="value"
      seriesField="name"
    />
  )
}

export function Playground() {
  return <Default />
}

export default createMetadata({
  title: 'Компоненты|/Column',
  id: 'components/Column',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3698%3A1361',
    },
  },
})
