import React, { useEffect, useImperativeHandle } from 'react'

import {
  Histogram as G2plotHistogram,
  HistogramOptions as G2plotHistogramProps,
} from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type HistogramProps = ChartProps<G2plotHistogramProps>

type Histogram = (props: HistogramProps) => React.ReactElement | null

export const Histogram: Histogram = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const { chart, container } = useChart(G2plotHistogram, rest)

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
