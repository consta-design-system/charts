import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { DualAxes } from '@/__private__/components/DualAxes'
import { data } from '@/__private__/components/DualAxes/__mocks__/mock.data'

export function DualAxesExampleSlider() {
  const vars = useThemeVars()

  return (
    <DualAxes
      style={{ marginBottom: 'var(--space-m)' }}
      data={[data, data]}
      geometryOptions={[
        { color: vars.color.primary['--color-bg-normal'] },
        { color: vars.color.primary['--color-bg-success'] },
      ]}
      xField="year"
      slider={{
        start: 0,
        end: 0.5,
      }}
      yField={['value', 'count']}
    />
  )
}
