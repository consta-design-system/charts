import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { createMetadata } from '@/__private__/storybook'

import { stackedData } from '../__mocks__/mock.data'
import { Histogram, HistogramProps } from '../Histogram'

import mdx from './Histogram.docs.mdx'

const Default = () => {
  const vars = useThemeVars()
  const options: HistogramProps = {
    data: stackedData,
    binField: 'value',
    stackField: 'name',
    binWidth: 4,
    color: [
      vars.color.primary['--color-bg-success'],
      vars.color.primary['--color-bg-normal'],
      vars.color.primary['--color-bg-warning'],
    ],
    meta: {
      range: {
        tickInterval: 10,
      },
      count: {
        max: 50,
        nice: false,
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'top-left',
      marker: {
        symbol: 'square',
      },
    },
  }

  return (
    <Histogram
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
  title: 'Компоненты|/Histogram',
  id: 'components/Histogram',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lQJPpOcbtlRk18YSyb6inq/Consta-Charts?node-id=3824%3A11584',
    },
  },
})
