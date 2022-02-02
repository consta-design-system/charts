import React, { useEffect, useImperativeHandle } from 'react'

import { Bar as G2plotBar } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { useChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'

import { BarComponentType } from './types'

export * from './types'

export const Bar: BarComponentType = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotBar, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
