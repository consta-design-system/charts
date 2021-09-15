import React from 'react'

import { Radar, RadarProps } from '@/Radar'
import { dataWin as data } from '@/Radar/__mocks__/mock.data'

export function RadarExampleBasic() {
  const options: RadarProps = {
    data,
    xField: 'skill',
    yField: 'star',
  }

  return <Radar {...options} />
}
