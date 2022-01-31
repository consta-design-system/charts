import React, { useEffect, useImperativeHandle } from 'react'

import { DualAxes as G2plotDualAxes } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/hooks/useChart'
import { useChartTheme } from '@/hooks/useChartTheme'
import { getChart } from '@/utils/getChart'

import { DualAxesComponentType } from './types'

export * from './types'

export const DualAxes: DualAxesComponentType = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    annotations,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotDualAxes, {
    ...rest,
    annotations,
    theme,
  })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
