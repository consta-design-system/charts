import React, { useEffect, useImperativeHandle } from 'react'

import { Line as G2plotLine } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'
import { useThemeVars } from '@consta/uikit/useThemeVars'

import { useChart } from '@/hooks/useChart'
import { getChartTheme } from '@/hooks/useChartTheme'
import { getChart } from '@/utils/getChart'

import { LineComponentType } from './types'

export * from './types'

export const Line: LineComponentType = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const themeVars = useThemeVars()
  const theme = getChartTheme(themeVars)

  const { chart, container } = useChart(G2plotLine, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
