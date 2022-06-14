import React from 'react'

import { Bar } from '@/__private__/components/Bar'
import { data } from '@/__private__/components/Bar/__mocks__/mock.data'
import { getLegend } from '@/__private__/utils/legend'

export function BarExampleGroup() {
  return (
    <Bar
      style={{ marginBottom: 'var(--space-m)', height: 800 }}
      data={data}
      xField="value"
      yField="month"
      seriesField="name"
      color={['#56B9F2', '#F38B00', '#22C38E']}
      isGroup
      legend={getLegend({ layout: 'horizontal', position: 'top-left' })}
      renderer="svg"
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  )
}
