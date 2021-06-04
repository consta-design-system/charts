import React from 'react'

import { createMetadata } from '@/__private__/storybook'

import { data } from '../__mocks__/mock.data'
import { Bar } from '../Bar'

import mdx from './Bar.docs.mdx'

const Default = () => {
  return (
    <Bar
      data={data}
      padding="auto"
      xField="value"
      yField="month"
      seriesField="name"
      marginRatio={0}
      style={{
        width: 800,
        height: '100%',
      }}
      renderer="svg"
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
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3803%3A11645',
    // },
  },
})
