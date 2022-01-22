import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Radar, RadarProps } from '@/Radar'
import { dataWin as data } from '@/Radar/__mocks__/mock.data'

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
