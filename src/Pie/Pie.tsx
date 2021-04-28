import React, { useEffect, useImperativeHandle } from 'react'

import { Pie as G2plotPie, PieOptions as G2plotPieProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { useChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type PieProps = ChartProps<G2plotPieProps>

type Pie = (props: PieProps) => React.ReactElement | null

export const Pie: Pie = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    children,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotPie, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
