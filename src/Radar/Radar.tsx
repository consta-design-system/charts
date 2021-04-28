import React, { useEffect, useImperativeHandle } from 'react'

import { Radar as G2plotRadar, RadarOptions as G2plotRadarProps } from '@antv/g2plot'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useChart } from '@/__private__/hooks/useChart'
import { useChartTheme } from '@/__private__/hooks/useChartTheme'
import { getChart } from '@/__private__/utils/getChart'
import { ChartProps } from '@/__private__/utils/types/ChartProps'

export type RadarProps = Omit<ChartProps<G2plotRadarProps>, 'color' | 'label'>

type Radar = (props: RadarProps) => React.ReactElement | null

export const Radar: Radar = React.forwardRef((props, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    ...rest
  } = props
  const theme = useChartTheme()
  const { chart, container } = useChart(G2plotRadar, { ...rest, theme })

  useEffect(() => {
    getChart(chartRef, chart.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart.current])

  useImperativeHandle(chartRef, () => ({
    getChart: () => chart.current,
  }))

  return <div style={style} ref={useForkRef([ref, container])} className={className} />
})
