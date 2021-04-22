import React, { useEffect, useImperativeHandle } from 'react'

import { Gauge as G2plotGauge, GaugeOptions as G2plotGaugeProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type GaugeProps = ChartProps<G2plotGaugeProps>

type Gauge = (props: GaugeProps) => React.ReactElement | null

export const Gauge: Gauge = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props

  const { chart, container } = useChart(G2plotGauge, rest)

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
