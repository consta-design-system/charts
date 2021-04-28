import React, { useEffect, useImperativeHandle } from 'react'

import { Scatter as G2plotScatter, ScatterOptions as G2plotScatterProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { useChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type ScatterProps = Omit<ChartProps<G2plotScatterProps>, 'color' | 'label'>

type Scatter = (props: ScatterProps) => React.ReactElement | null

export const Scatter: Scatter = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotScatter, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
