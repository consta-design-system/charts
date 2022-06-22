import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Radar, RadarProps } from '@/__private__/components/Radar'
import { dataWin as data } from '@/__private__/components/Radar/__mocks__/mock.data'
import { getLegend } from '@/__private__/utils/legend'

export function RadarExampleBasic() {
  const vars = useThemeVars()

  const colors: Record<string, string> = {
    'Винни-Пух': vars.color.primary['--color-bg-success'],
    Пятачок: vars.color.primary['--color-bg-normal'],
  }

  const options: RadarProps = {
    data,
    color: Object.keys(colors).map(key => colors[key]),
    legend: getLegend({ colors, offsetX: -50, offsetY: 50 }),
    renderer: 'svg',
    xField: 'skill',
    yField: 'star',
  }

  return <Radar {...options} />
}
