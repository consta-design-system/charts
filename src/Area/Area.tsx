import React, { useEffect, useImperativeHandle } from 'react'

import { Area as G2plotArea } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/hooks/useChart'
import { useChartTheme } from '@/hooks/useChartTheme'
import { getChart } from '@/utils/getChart'

import { AreaComponentType } from './types'

export * from './types'

export const Area: AreaComponentType = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotArea, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
