import React, { useEffect, useImperativeHandle } from 'react'

import { Column as G2plotColumn, ColumnOptions as G2plotColumnProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type ColumnProps = ChartProps<G2plotColumnProps>

type Column = (props: ColumnProps) => React.ReactElement | null

export const Column: Column = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const { chart, container } = useChart(G2plotColumn, rest)

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
