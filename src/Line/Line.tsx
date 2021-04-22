import React, { useEffect, useImperativeHandle } from 'react'

import { Line as G2plotLine, LineOptions as G2plotLineProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type LineProps = ChartProps<G2plotLineProps>

type Line = (props: LineProps) => React.ReactElement | null

export const Line: Line = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const { chart, container } = useChart(G2plotLine, rest)

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
