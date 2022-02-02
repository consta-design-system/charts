import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Radar, RadarProps } from '@/__private__/components/Radar'
import { dataWin as data } from '@/__private__/components/Radar/__mocks__/mock.data'

export function RadarExampleBasic() {
  const vars = useThemeVars()

  const options: RadarProps = {
    data,
    color: [vars.color.primary['--color-bg-success'], vars.color.primary['--color-bg-normal']],
    xField: 'skill',
    yField: 'star',
  }

  return <Radar {...options} />
}
