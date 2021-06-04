import React from 'react'
// import { data } from '../__mocks__/mock.data';

import { createMetadata } from '@/__private__/storybook'

import { Gauge, GaugeProps } from '../Gauge'

const Default = () => {
  const options: GaugeProps = {
    percent: 0.7,
    range: {
      // ticks: [0, 1 / 3, 2 / 3, 1],
      // color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  }

  return (
    <Gauge
      style={{
        width: 300,
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
  title: 'Компоненты|/Gauge',
  id: 'components/Gauge',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3852%3A230',
    },
  },
})
